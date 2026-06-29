// traduzir pop ups mapa
function getTranslation(key) {
    const lang = localStorage.getItem('preferred-language') || 'pt';
    const translations = window.translations || {}; 

    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return key; 
}

// Mantido aqui apenas para formatar o campo visualmente enquanto digita
function cpfMask(input) {
    let value = input.value.replace(/\D/g, ""); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = value;
}

document.addEventListener('DOMContentLoaded', function() {
    
    const btnCidadao = document.getElementById('BtC');
    const btnAdministrador = document.getElementById('BtA');

    if (btnCidadao) {
        btnCidadao.addEventListener('click', function() {
            window.location.href = 'pages/forms/logincid.html';
        });
    }

    if (btnAdministrador) {
        btnAdministrador.addEventListener('click', function() {
            window.location.href = 'pages/forms/loginadm.html'; 
        });
    }

    /* MENU HAMBURGUER  */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu'); 

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    /*Mapa */
    const mapMarkers = document.querySelectorAll('.mapamarc');
    const occurrencePopup = document.getElementById('occurrencePopup');
    const popupTitle = document.getElementById('popupTitulo');
    const popupDescription = document.getElementById('popupDescricao');

    if (mapMarkers.length > 0) {
        mapMarkers.forEach(marker => {
            marker.addEventListener('click', function() {
                const titleKey = this.dataset.translateTitle; 
                const descriptionKey = this.dataset.translateDescription; 
                
                const title = getTranslation(titleKey); 
                const description = getTranslation(descriptionKey); 

                popupTitle.textContent = title;
                popupDescription.textContent = description;

                const markerRect = this.getBoundingClientRect();
                const mapContainerRect = this.parentElement.getBoundingClientRect();

                occurrencePopup.style.left = `${markerRect.left - mapContainerRect.left + markerRect.width + 10}px`;
                occurrencePopup.style.top = `${markerRect.top - mapContainerRect.top - (occurrencePopup.offsetHeight / 2) + (markerRect.height / 2)}px`;
                
                occurrencePopup.style.display = 'block';
            });
        });
    }

    document.addEventListener('click', function(event) {
        if (occurrencePopup && !occurrencePopup.contains(event.target) && !event.target.classList.contains('mapamarc')) {
            occurrencePopup.style.display = 'none';
        }
    });
    
    // Gerenciamento isolado da máscara do CPF
    const cpfInputs = document.querySelectorAll('#cpf');
    cpfInputs.forEach(input => {
        input.addEventListener('input', function() {
            cpfMask(this);
        });
    });

    /*Botão Cadastre-se Cidadão*/
    const botaoCadastrarCidadao = document.getElementById('btnCadastrarCidadao');
    if (botaoCadastrarCidadao) {
        botaoCadastrarCidadao.addEventListener('click', function() {
            window.location.href = 'cadastrocid.html'; 
        });
    }

    /*Botão Cadastre-se Administrador*/
    const botaoCadastrarAdministrador = document.getElementById('btnCadastrarAdministrador');
    if (botaoCadastrarAdministrador) {
        botaoCadastrarAdministrador.addEventListener('click', function() {
            window.location.href = 'cadastroadm.html'; 
        });
    }

    /*Botão Login Cidadão (volta do Cadastro)*/
    const botaoLoginCidadao = document.getElementById('btn_LoginCidadao');
    if (botaoLoginCidadao) {
        botaoLoginCidadao.addEventListener('click', function() {
            window.location.href = 'logincid.html'; 
        });
    }

    /*Botão Login Administrador (volta do Cadastro)*/
    const botaoLoginAdministrador = document.getElementById('btn_LoginAdministrador');
    if (botaoLoginAdministrador) {
        botaoLoginAdministrador.addEventListener('click', function() {
            window.location.href = 'loginadm.html'; 
        });
    }

    /*Seleção de botões da pagina de detalhes de ocorrência do adm*/
    const btnStatusElements = document.querySelectorAll('.btnstatus');
    btnStatusElements.forEach(button => {
        button.addEventListener('click', function() {
            btnStatusElements.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            const statusValue = this.textContent.trim().toLowerCase().replace(' ', '-');
            const statusInput = document.getElementById('status-input');
            if (statusInput) {
                statusInput.value = statusValue;
            }
        });
    });

    /*Script do carrosel*/
    const grid = document.querySelector('.cardsgrid');
    const cards = document.querySelectorAll('.carditem');
    const carrossel = document.querySelector('.carrossel');

    if (grid && cards.length > 0 && carrossel) {
        let index = 0;
        let intervalo;

        function atualizar() {
            grid.style.transform = `translateX(-${index * 100}%)`;
        }

        function iniciarAuto() {
            intervalo = setInterval(() => {
                index++;
                if (index >= cards.length) index = 0;
                atualizar();
            }, 3000);
        }

        function pararAuto() {
            clearInterval(intervalo);
        }

        carrossel.addEventListener('mouseover', pararAuto);
        carrossel.addEventListener('mouseout', iniciarAuto);
        iniciarAuto();
    }
});

