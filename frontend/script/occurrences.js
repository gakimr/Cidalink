// 🔥 ALTERAÇÃO AQUI: Ajustado para o endpoint correto da rota de occurrences
const API_URL = "http://localhost:3000/ocorrencias";

document.addEventListener("DOMContentLoaded", () => {
    const formOcorrencia = document.getElementById("ocorrenciaForm");
    
    if (formOcorrencia) {
        formOcorrencia.addEventListener("submit", enviarOcorrencia);
    }

    const inputRua = document.getElementById("rua");
    const inputBairro = document.getElementById("bairro");

    if (inputRua && inputBairro) {
        inputRua.addEventListener("blur", buscarCoordenadasAutomatico);
        inputBairro.addEventListener("blur", buscarCoordenadasAutomatico);
    }
});

async function buscarCoordenadasAutomatico() {
    const rua = document.getElementById("rua").value.trim();
    const bairro = document.getElementById("bairro").value.trim();

    if (rua.length < 3) return;

    const enderecoCompleto = `${rua}, ${bairro}, Taquaritinga, SP, Brasil`;
    console.log("Buscando coordenadas para:", enderecoCompleto);

    try {
        const urlSearch = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enderecoCompleto)}&limit=1`;
        
        const response = await fetch(urlSearch, {
            headers: {
                "User-Agent": "CidaLink-App-Student-Project"
            }
        });
        
        const dados = await response.json();

        if (dados && dados.length > 0) {
            const lat = dados[0].lat;
            const lon = dados[0].lon;

            document.getElementById("latitude").value = lat;
            document.getElementById("longitude").value = lon;
            console.log(`Coordenadas obtidas: Lat ${lat}, Lng ${lon}`);
        } else {
            console.warn("Endereço não localizado pelo OpenStreetMap.");
        }
    } catch (error) {
        console.error("Erro ao conectar com o serviço de mapas:", error);
    }
}

async function enviarOcorrencia(event) {
    event.preventDefault();

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa estar logado para relatar uma ocorrência.");
        window.location.href = "../forms/logincid.html";
        return;
    }

    const lat = document.getElementById("latitude").value;
    const lng = document.getElementById("longitude").value;
    const rua = document.getElementById("rua").value.trim();
    const bairro = document.getElementById("bairro").value.trim();

    if (!lat || !lng) {
        alert("Não conseguimos obter a localização exata deste endereço. Por favor, verifique se o nome da rua está correto.");
        return;
    }

    const inputFoto = document.getElementById("uploadFoto");
    const formData = new FormData();
    
    formData.append("user_id", usuarioLogado.id);
    formData.append("titulo", document.getElementById("tipoOcorrencia").value); 
    formData.append("descricao", document.getElementById("descricao").value);
    formData.append("categoria", document.getElementById("tipoOcorrencia").value);
    formData.append("rua", rua);
    formData.append("bairro", bairro);
    formData.append("latitude", lat);
    formData.append("longitude", lng);

    if (inputFoto.files[0]) {
        formData.append("uploadFoto", inputFoto.files[0]);
    }

    try {
        
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            body: formData
        });

        const resultado = await response.json();

        if (resultado.message === "Success") {
            alert("Ocorrência registrada com sucesso!");
            window.location.href = "inicial.html"; 
        } else {
            alert(`Erro ao registrar ocorrência: ${resultado.data}`);
        }

    } catch (error) {
        console.error("Erro na submissão:", error);
        alert("Não foi possível conectar ao servidor.");
    }
}