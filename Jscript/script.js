/*index*/
const btnCidadao = document.getElementById('BtC');
    const btnAdministrador = document.getElementById('BtA');

    
    if (btnCidadao) {
        btnCidadao.addEventListener('click', function() {
            window.location.href = 'logincid.html';
        });
    }

    
    if (btnAdministrador) {
         btnAdministrador.addEventListener('click', function() {
            window.location.href = 'loginadm.html'; 
        })
    }
       /*login do cidadao*/    
 document.addEventListener('DOMContentLoaded', function() {
            const botaoEntrar = document.getElementById('entrar');

            if (botaoEntrar) {
                botaoEntrar.addEventListener('click', function(event) {
                    event.preventDefault(); 
                    window.location.href = 'cidalinkinicial.html'; 
                });
            } else {
                console.error("Erro: O botão com o ID 'entrar' não foi encontrado.");
            }
        });

/*mapa*/
 const mapMarkers = document.querySelectorAll('.mapamarc');
        const occurrencePopup = document.getElementById('occurrencePopup');
        const popupTitle = document.getElementById('popupTitulo');
        const popupDescription = document.getElementById('popupDescricao');

        mapMarkers.forEach(marker => {
            marker.addEventListener('click', function() {
                const title = this.dataset.title;
                const description = this.dataset.description;

                popupTitulo.textContent = title;
                popupDescricao.textContent = description;

              
                const markerRect = this.getBoundingClientRect();
                const mapContainerRect = this.parentElement.getBoundingClientRect();

                occurrencePopup.style.left = `${markerRect.left - mapContainerRect.left + markerRect.width + 10}px`;
                occurrencePopup.style.top = `${markerRect.top - mapContainerRect.top - (occurrencePopup.offsetHeight / 2) + (markerRect.height / 2)}px`;
                
                occurrencePopup.style.display = 'block';
            });
        });

       
        document.addEventListener('click', function(event) {
            if (!occurrencePopup.contains(event.target) && !event.target.classList.contains('mapamarc')) {
                occurrencePopup.style.display = 'none';
            }
        });

      