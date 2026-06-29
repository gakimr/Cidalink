const API_URL = "http://localhost:3000/ocorrencias";

document.addEventListener('DOMContentLoaded', function() {
    //inicializa o mapa centralizado em Taquaritinga
    const map = L.map('mapa').setView([-21.4056, -48.5044], 15);

    //adiciona a camada visual do mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    //chama a função para buscar os dados do back e coloca os Pins
    carregarMarcadoresDinamicos(map);
});

// FUNÇÃO CONECTADA À API PARA INJETAR OS PINS REAIS
async function carregarMarcadoresDinamicos(map) {
    try {
       
        const response = await fetch(API_URL);
        const resultado = await response.json();

        if (resultado.message === "Success") {
            const ocorrencias = resultado.data;

            ocorrencias.forEach(ponto => {
                const lat = parseFloat(ponto.latitude);
                const lng = parseFloat(ponto.longitude);

                if (isNaN(lat) || isNaN(lng)) return;

                let corPino = "#ef4444"; 
                let textoStatus = ponto.status || "Pendente";

                if (ponto.status === "Em Andamento") {
                    corPino = "#f59e0b"; 
                } else if (ponto.status === "Resolvido") {
                    corPino = "#22c55e"; 
                }

                let categoriaTexto = ponto.categoria;
                if (ponto.categoria === "buraco") categoriaTexto = "⚠️ Buraco na Rua";
                if (ponto.categoria === "iluminacao") categoriaTexto = "💡 Iluminação Pública";
                if (ponto.categoria === "lixo") categoriaTexto = "🗑️ Acúmulo de Lixo";
                if (ponto.categoria === "saneamento") categoriaTexto = "🚰 Saneamento";

                const iconHTML = `
                    <div class="custom-pin" style="
                        background-color: ${corPino};
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        border: 2px solid #ffffff;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.4);
                    "></div>
                `;
                
                const customIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: iconHTML,
                    iconSize: [18, 18],
                    iconAnchor: [9, 9]
                });

                const urlImagem = ponto.fotoOcorrencia 
                    ? `http://localhost:3000/uploads/${ponto.fotoOcorrencia}`
                    : "https://placehold.co/600x400/eef2f7/333?text=Sem+Imagem";

                L.marker([lat, lng], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`
                        <div style="text-align: center; font-family: 'Roboto', sans-serif; max-width: 180px;">
                            <img src="${urlImagem}" style="width: 100%; height: 95px; object-fit: cover; border-radius: 6px; margin-bottom: 6px;" alt="Foto do relato">
                            <strong style="color: #1e3a8a; font-size: 14px; display: block; margin-bottom: 2px;">${ponto.bairro || "Relato"}</strong>
                            <span style="font-size: 11px; color: #6b7280; display: block; margin-bottom: 4px;">📂 ${categoriaTexto}</span>
                            <p style="font-size: 12px; margin: 4px 0; color: #374151; text-align: left; max-height: 50px; overflow: hidden; text-overflow: ellipsis;">${ponto.descricao}</p>
                            <div style="margin-top: 6px; padding: 3px; border-radius: 4px; background-color: ${corPino}; color: #fff; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                                ${textoStatus}
                            </div>
                        </div>
                    `);
            });
        } else {
            console.error("Erro ao puxar ocorrências para o mapa:", resultado.data);
        }
    } catch (error) {
        console.error("Erro na requisição dos pins do mapa:", error);
    }
}