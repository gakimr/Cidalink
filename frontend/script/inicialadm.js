async function carregarOcorrencias() {
    try {

        const response = await fetch("http://localhost:3000/ocorrencias");
        const result = await response.json();

        const feed = document.getElementById("feedOcorrencias");

        feed.innerHTML = "";

        result.data.forEach(oc => {

            const foto = oc.fotoOcorrencia
                ? `http://localhost:3000/uploads/${oc.fotoOcorrencia}`
                : "../../img/sem-imagem.png";

            const fotoUsuario = oc.foto_usuario
                ? `http://localhost:3000/uploads/${oc.foto_usuario}`
                : null;

            feed.innerHTML += `
                <article class="occard admin">

                    <div class="ocheader">
                        <div class="perfilcid">
                            ${
                                fotoUsuario
                                ? `<img class="foto-usuario-oc" src="${fotoUsuario}" alt="Foto do usuário">`
                                : `${oc.nome_usuario ? oc.nome_usuario.charAt(0).toUpperCase() : "C"}`
                            }
                        </div>

                        <div class="cidinfo">
                            <strong>${oc.nome_usuario || "Cidadão"}</strong>
                            <span>${oc.bairro || "Sem bairro"}</span>
                        </div>
                    </div>

                    <div class="ocbody">
                        <h3>${oc.titulo}</h3>

                        <p class="ocdescricao">
                            ${oc.descricao}
                        </p>

                        <div class="Foto">
                            <img src="${foto}" alt="${oc.titulo}">
                        </div>

                        <p>
                            <strong>Status:</strong>
                            ${oc.status}
                        </p>
                    </div>

                    <div class="ocfooter admin">
                        <a href="ocdetalhes.html?id=${oc.id}"
                           class="btnadmin">
                           Responder / Atualizar
                        </a>
                    </div>

                </article>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar ocorrências:", erro);
    }
}

document.addEventListener("DOMContentLoaded", carregarOcorrencias);