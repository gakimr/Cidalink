document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicializa o mapa centralizado em Taquaritinga
    // Coordenadas centrais aproximadas da cidade
    const map = L.map('mapa').setView([-21.4056, -48.5044], 15);

    // 2. Adiciona a camada de mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 3. Array de ocorrências com os 3 status e cores
    const ocorrencias = [
        { 
            lat: -21.4065, 
            lng: -48.5030, 
            titulo: "Buraco na Via", 
            cor: "var(--vermelho)", 
            status: "Pendente"
        },
        { 
            lat: -21.4030, 
            lng: -48.5080, 
            titulo: "Iluminação Precária", 
            cor: "var(--amarelo)",
            status: "Em Andamento"
        },
        { 
            lat: -21.4050, 
            lng: -48.5045, 
            titulo: "Manutenção de Praça", 
            cor: "var(--verde)",
            status: "Resolvido"
        }
    ];

    // 4. Função para renderizar cada marcador no mapa
    ocorrencias.forEach(ponto => {
        // Cria o ícone personalizado (o pino em formato de gota)
        const iconHTML = `<div class="custom-pin" style="background-color: ${ponto.cor}"></div>`;
        
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: iconHTML,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        // Adiciona o marcador ao mapa com um Popup bonitinho
        L.marker([ponto.lat, ponto.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center; font-family: 'Roboto', sans-serif;">
                    <strong style="color: #000a6e; font-size: 14px;">${ponto.titulo}</strong><br>
                    <span style="color: #666; font-size: 12px;">Status: <b>${ponto.status}</b></span>
                </div>
            `);
    });

    // Ajuste de redimensionamento (evita que o mapa fique cinza ao carregar)
    setTimeout(() => {
        map.invalidateSize();
    }, 500);
});