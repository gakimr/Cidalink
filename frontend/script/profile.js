const PROFILE_API = "http://localhost:3000/profile";

window.onload = function() {
    console.log("Página carregada, inicializando...");
    carregarDadosUsuario();
    configurarEventosInterface();
    carregarMinhasOcorrencias();
};

// Carrega os dados do usuário
function carregarDadosUsuario() {
    const dadosCidadao = sessionStorage.getItem("usuarioCidaLink");
    const dadosAdmin = sessionStorage.getItem("usuarioLogado");
    
    let usuarioLogado = null;
    
    if (dadosCidadao) {
        usuarioLogado = JSON.parse(dadosCidadao);
    } else if (dadosAdmin) {
        usuarioLogado = JSON.parse(dadosAdmin);
    }

    if (!usuarioLogado) {
        alert("Sessão expirada. Por favor, faça login novamente.");
        window.location.href = "../forms/logincid.html";
        return;
    }

    const tituloNome = document.getElementById("nomeTitulo");
    if (tituloNome) {
        tituloNome.textContent = usuarioLogado.name || usuarioLogado.nome || "Cidadão";
    }

    document.getElementById("nome").value = usuarioLogado.name || usuarioLogado.nome || "";
    document.getElementById("cpf").value = usuarioLogado.cpf || "";
    document.getElementById("email").value = usuarioLogado.email || "";
    document.getElementById("bairro").value = usuarioLogado.bairro || "";
    document.getElementById("rua").value = usuarioLogado.rua || "";
    document.getElementById("latitude").value = usuarioLogado.latitude || "";
    document.getElementById("longitude").value = usuarioLogado.longitude || "";

    const fotoElemento = document.getElementById("fotoPerfil");
    const nomeFoto = usuarioLogado.fotoPerfil || usuarioLogado.foto_perfil;
    if (fotoElemento) {
        fotoElemento.src = nomeFoto 
            ? `http://localhost:3000/uploads/${nomeFoto}` 
            : "https://placehold.co/100x100/A0E0A0/000?text=CidaLink";
    }
}

// Configura interações dos botões
function configurarEventosInterface() {
    const btnEditar = document.getElementById("btnEditar");
    const btnUpload = document.getElementById("btnUpload");
    const inputFoto = document.getElementById("uploadFoto");
    const btnSalvar = document.getElementById("btnSalvar");
    const camposEditaveis = ["nome", "email", "bairro", "rua", "latitude", "longitude"];

    if (btnEditar) {
        btnEditar.addEventListener("click", (e) => {
            e.preventDefault(); 
            camposEditaveis.forEach(id => {
                const campo = document.getElementById(id);
                if (campo) campo.removeAttribute("disabled");
            });
            if (btnUpload) btnUpload.style.display = "inline-block"; 
            if (btnSalvar) btnSalvar.style.display = "block";       
            btnEditar.style.display = "none";        
        });
    }

    if (btnUpload && inputFoto) {
        btnUpload.addEventListener("click", () => inputFoto.click());
    }

    if (inputFoto) {
        inputFoto.addEventListener("change", (event) => {
            const arquivo = event.target.files[0];
            if (arquivo) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const fotoPerfil = document.getElementById("fotoPerfil");
                    if (fotoPerfil) fotoPerfil.src = e.target.result;
                };
                reader.readAsDataURL(arquivo);
            }
        });
    }

    const perfilForm = document.getElementById("perfilForm");
    if (perfilForm) {
        perfilForm.addEventListener("submit", salvarAlteracoes);
    }
}

async function carregarMinhasOcorrencias() {
    const container = document.getElementById("minhasOcorrencias");
    if (!container) return;

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado")) || JSON.parse(sessionStorage.getItem("usuarioCidaLink"));
    if (!usuarioLogado) return;

    const userId = usuarioLogado.id || usuarioLogado.id_user;

    try {
        const response = await fetch("http://localhost:3000/ocorrencias");
        const resultado = await response.json();
        const listaOcorrencias = resultado.data || resultado;

        const minhasOcorrencias = listaOcorrencias.filter(item =>
            Number(item.user_id || item.id_user || item.usuario_id) === Number(userId)
        );

        // Atualiza contadores
        const resolvidas = minhasOcorrencias.filter(item => (item.status || "").toLowerCase().includes("resolvid")).length;
        const pendentes = minhasOcorrencias.filter(item => (item.status || "").toLowerCase().includes("pendente")).length;
        const emAndamento = minhasOcorrencias.filter(item => (item.status || "").toLowerCase().includes("andamento")).length;

        if (document.getElementById("totalResolvidas")) document.getElementById("totalResolvidas").textContent = resolvidas;
        if (document.getElementById("totalPendentes")) document.getElementById("totalPendentes").textContent = pendentes;
        if (document.getElementById("totalAndamento")) document.getElementById("totalAndamento").textContent = emAndamento;

        if (minhasOcorrencias.length === 0) {
            container.innerHTML = "<p>Você ainda não registrou nenhuma ocorrência.</p>";
            return;
        }

        container.innerHTML = "";
        minhasOcorrencias.forEach(item => {
            const status = item.status || "Pendente";
            const statusClasse = status.toLowerCase().includes("resolvid") ? "status-concluido" :
                                 status.toLowerCase().includes("pendente") ? "status-rejeitado" :
                                 status.toLowerCase().includes("andamento") ? "status-em-andamento" : "status-rejeitado";

            container.insertAdjacentHTML("beforeend", `
                <div class="card-ocorrencia ${statusClasse}">
                    <div class="oc-info">
                        <h3>${item.titulo || item.title || "Ocorrência"}</h3>
                        <p><strong>Categoria:</strong> ${item.categoria || ""}</p>
                        <p><strong>Endereço:</strong> ${item.rua || ""} - ${item.bairro || ""}</p>
                        <p><strong>Descrição:</strong> ${item.descricao || item.description || ""}</p>
                    </div>
                    <div class="oc-status"><span>${status}</span></div>
                </div>
            `);
        });
    } catch (error) {
        console.error("Erro ao buscar ocorrências:", error);
    }
}

async function salvarAlteracoes(event) {
    event.preventDefault(); 
    console.log("Iniciando processo de salvamento..."); // Log de teste

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado")) || 
                          JSON.parse(sessionStorage.getItem("usuarioCidaLink"));
    
    if (!usuarioLogado) {
        alert("Erro: Usuário não encontrado no sessionStorage. Faça login novamente.");
        return;
    }

    const userId = usuarioLogado.id || usuarioLogado.id_user;
    const formData = new FormData();
    
    formData.append("id", userId);
    formData.append("name", document.getElementById("nome").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("bairro", document.getElementById("bairro").value);
    formData.append("rua", document.getElementById("rua").value);
    formData.append("latitude", document.getElementById("latitude").value);
    formData.append("longitude", document.getElementById("longitude").value);

    const inputFoto = document.getElementById("uploadFoto");
    if (inputFoto && inputFoto.files[0]) {
        formData.append("uploadFoto", inputFoto.files[0]);
    }

    try {
        const response = await fetch(`${PROFILE_API}/update`, {
            method: "PUT",
            body: formData
        });

        // Tenta ler a resposta como JSON
        const resultado = await response.json();
        console.log("Resposta do servidor:", resultado);

        if (response.ok && resultado.message === "Success") {
            alert("Perfil atualizado com sucesso!");
            
            // Atualiza o storage com os novos dados
            sessionStorage.setItem("usuarioLogado", JSON.stringify(resultado.data));
            sessionStorage.setItem("usuarioCidaLink", JSON.stringify(resultado.data));
            
            window.location.reload(); 
        } else {
            alert("Erro do servidor: " + (resultado.data || "Erro desconhecido"));
        }
    } catch (error) {
        console.error("Erro completo:", error);
        alert("Falha na conexão com a API. Verifique se o servidor na porta 3000 está rodando.");
    }
}