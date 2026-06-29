const API_URL = "http://localhost:3000/ocorrencias";

document.addEventListener("DOMContentLoaded", () => {
    carregarFeedOcorrencias();
});

async function carregarFeedOcorrencias() {
    const feedContainer = document.getElementById("feedOcorrencias");
    
    if (!feedContainer) return; 
    try {
        const response = await fetch(API_URL);
        const resultado = await response.json();
        console.log("Dados que chegaram da API:", resultado.data);

        if (resultado.message === "Success") {
            const ocorrencias = resultado.data;

            // Se o banco estiver limpo e vazio
            if (ocorrencias.length === 0) {
                feedContainer.innerHTML = `<p style="text-align:center; width:100%; padding:40px; color:var(--cinza, #888);">Nenhum relato registrado na sua região ainda.</p>`;
                return;
            }

            // Garante que o container está limpo antes de listar
            feedContainer.innerHTML = "";

            // .reverse() faz com que a última ocorrência criada apareça primeiro no topo do feed
            ocorrencias.forEach(item => {
                
                // Trata a imagem salva no Multer. Se não tiver, usa um placeholder limpo
                const urlImagem = item.fotoOcorrencia 
                    ? `http://localhost:3000/uploads/${item.fotoOcorrencia}`
                    : "https://placehold.co/600x400/eef2f7/333?text=Sem+Imagem";

                // 🚨 NOVO: Captura o nome do utilizador vindo do JOIN do Back-End
                // Se por acaso vier vazio, define "Cidadão" como plano de contingência
                const nomeAutor = item.nome_usuario || "Cidadão";

                const fotoUsuario = item.foto_usuario 
                ? `http://localhost:3000/uploads/${item.foto_usuario}` 
                : null;

                // 🚨 NOVO: Pega a primeira letra do nome real para criar a inicial dentro do círculo de perfil
                const inicialPerfil = nomeAutor.charAt(0).toUpperCase();

                // Formata os nomes das categorias para exibição amigável
                let categoriaTexto = item.categoria;
                if (item.categoria === "buraco") categoriaTexto = "⚠️ Buraco na Rua";
                if (item.categoria === "iluminacao") categoriaTexto = "💡 Iluminação Pública";
                if (item.categoria === "lixo") categoriaTexto = "🗑️ Acúmulo de Lixo";
                if (item.categoria === "saneamento") categoriaTexto = "🚰 Saneamento";

                // 🔥 ESTRUTURA IDENTICA AO SEU PROTÓTIPO HTML/CSS COM OS DADOS REAIS DO UTILIZADOR
                const cardHTML = `
                    <article class="occard">
                       <div class="ocheader">
                            <div class="perfilcid">
                                ${fotoUsuario 
                                    ? `<img src="${fotoUsuario}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">` 
                                    : inicialPerfil}
                            </div>
                            <div class="cidinfo">
                                <strong>${nomeAutor}</strong>
                                <span>${item.bairro} - ${item.rua}</span>
                            </div>
                        </div>
                        <div class="ocbody">
                            <h4 style="margin: 0 0 8px 0; color: var(--azul-escuro); font-size: 14px;">${categoriaTexto}</h4>
                            <p class="ocdescricao">
                                ${item.descricao}
                            </p>
                            <div class="Foto">
                                <img alt="${item.titulo}" src="${urlImagem}"/>
                            </div>
                        </div>
                        <div class="ocfooter">
                            <button class="btnapoio">↑ 0 </button>
                            <button class="btnapoio">↓</button>
                        </div>
                    </article>
                `;

                // Injeta o card montado dentro do feed
                feedContainer.insertAdjacentHTML("beforeend", cardHTML);
            });

        } else {
            console.error("Erro na resposta da API:", resultado.data);
        }
    } catch (error) {
        console.error("Erro ao carregar os dados do servidor:", error);
    }
}