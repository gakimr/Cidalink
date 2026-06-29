const API_OCORRENCIAS = "http://localhost:3000/ocorrencias";

document.addEventListener("DOMContentLoaded", async () => {
    const detalhe = document.getElementById("detalheOcorrencia");
    const form = document.querySelector(".formulario-admin");
    const statusInput = document.getElementById("status-input");
    const respostaInput = document.getElementById("resposta");

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        alert("Nenhuma ocorrência selecionada.");
        window.location.href = "inicialadm.html";
        return;
    }

    try {
        const response = await fetch(API_OCORRENCIAS);
        const result = await response.json();

        const ocorrencia = result.data.find(oc => oc.id == id);

        if (!ocorrencia) {
            alert("Ocorrência não encontrada.");
            window.location.href = "inicialadm.html";
            return;
        }

        const foto = ocorrencia.fotoOcorrencia
            ? `http://localhost:3000/uploads/${ocorrencia.fotoOcorrencia}`
            : "../../img/sem-imagem.png";

        const fotoUsuario = ocorrencia.foto_usuario
            ? `http://localhost:3000/uploads/${ocorrencia.foto_usuario}`
            : null;

        detalhe.innerHTML = `
            <article class="occard admin">
                <div class="ocheader">
                    <div class="perfilcid">
                        ${
                            fotoUsuario
                            ? `<img class="foto-usuario-oc" src="${fotoUsuario}" alt="Foto do usuário">`
                            : `${ocorrencia.nome_usuario
                                ? ocorrencia.nome_usuario.charAt(0).toUpperCase()
                                : "C"}`
                        }
                    </div>

                    <div class="cidinfo">
                        <strong>${ocorrencia.nome_usuario || "Cidadão"}</strong>
                        <span>${ocorrencia.bairro || "Sem bairro"}</span>
                    </div>
                </div>

                <div class="ocbody">
                    <h3>${ocorrencia.titulo}</h3>

                    <p class="ocdescricao">
                        ${ocorrencia.descricao}
                    </p>

                    <div class="Foto">
                        <img src="${foto}" alt="${ocorrencia.titulo}">
                    </div>

                    <p><strong>Status atual:</strong> ${ocorrencia.status}</p>
                </div>
            </article>
        `;

        statusInput.value = ocorrencia.status || "";
        respostaInput.value = ocorrencia.resposta_admin || "";

    } catch (error) {
        console.error(error);
        alert("Erro ao carregar detalhes da ocorrência.");
    }

    document.querySelectorAll(".btnstatus").forEach(botao => {
        botao.addEventListener("click", () => {
            statusInput.value = botao.textContent.trim();
        });
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_OCORRENCIAS}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: statusInput.value,
                    resposta_admin: respostaInput.value
                })
            });

            const resultado = await response.json();

            if (resultado.message === "Success") {
                alert("Ocorrência atualizada com sucesso!");
                window.location.href = "gerenciaroc.html";
            } else {
                alert("Erro ao atualizar ocorrência.");
            }

        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com a API.");
        }
    });
});