//traduzir pop ups mapa
function getTranslation(key) {
    // 1. Pega o idioma atual salvo no localStorage
    const lang = localStorage.getItem('preferred-language') || 'pt';
    
    // 2. Acessa o objeto de traduções global (window.translations)
    const translations = window.translations || {}; 

    // 3. Retorna a tradução (ou a chave, caso não encontre)
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return key; 
}


function cpfMask(input) {
    let value = input.value.replace(/\D/g, ""); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = value;
}


function handleFormValidation(event, form) {
    event.preventDefault(); 
    let allValid = true;
    const allInputs = form.querySelectorAll('input, select');
    
    allInputs.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
            input.classList.add('campo-invalido');
            input.classList.remove('campo-valido');
        } else {
            input.classList.remove('campo-invalido');
            input.classList.add('campo-valido');
        }
    });

    if (allValid) {
        console.log('Formulário Válido! (Simulação de Envio)');
        form.reset();
        allInputs.forEach(input => {
            input.classList.remove('campo-invalido', 'campo-valido');
        });
    } else {
        const firstError = form.querySelector('.campo-invalido');
        if (firstError) {
             firstError.reportValidity(); 
             firstError.focus();
        }
    }
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


    /*Login Cidadão*/
    const botaoEntrar = document.getElementById('btnEntrarCid');
    if (botaoEntrar) {
        botaoEntrar.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = '../app/inicial.html'; 
        });
    }

    /*Login do Administrador */
const btnEntrarAdmin = document.getElementById('btnEntrarAdmin');

if (btnEntrarAdmin) {
    btnEntrarAdmin.addEventListener('click', function() {
        window.location.href = '../adm/inicialadm.html'; 
    });
}


    /*Mapa */
    const mapMarkers = document.querySelectorAll('.mapamarc');
    const occurrencePopup = document.getElementById('occurrencePopup');
    const popupTitle = document.getElementById('popupTitulo');
    const popupDescription = document.getElementById('popupDescricao');

    mapMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            // *** MUDANÇA PRINCIPAL AQUI: LENDO AS NOVAS CHAVES E TRADUZINDO ***
            const titleKey = this.dataset.translateTitle; // Pega a chave do título
            const descriptionKey = this.dataset.translateDescription; // Pega a chave da descrição
            
            // Busca o texto traduzido usando a função
            const title = getTranslation(titleKey); 
            const description = getTranslation(descriptionKey); 

            popupTitle.textContent = title;
            popupDescription.textContent = description;

            // Restante da sua lógica de posicionamento
            const markerRect = this.getBoundingClientRect();
            const mapContainerRect = this.parentElement.getBoundingClientRect();

            occurrencePopup.style.left = `${markerRect.left - mapContainerRect.left + markerRect.width + 10}px`;
            occurrencePopup.style.top = `${markerRect.top - mapContainerRect.top - (occurrencePopup.offsetHeight / 2) + (markerRect.height / 2)}px`;
            
            occurrencePopup.style.display = 'block';
        });
    });

    document.addEventListener('click', function(event) {
        if (occurrencePopup && !occurrencePopup.contains(event.target) && !event.target.classList.contains('mapamarc')) {
            occurrencePopup.style.display = 'none';
        }
    });
    

  
    const formCidadao = document.getElementById('cadastroFormCidadao');
    const formAdministrador = document.getElementById('cadastroFormAdministrador');
    
    const cpfInputCidadao = formCidadao ? formCidadao.querySelector('#cpf') : document.querySelector('#cpf');
    const cpfInputAdministrador = formAdministrador ? formAdministrador.querySelector('#cpf') : null;

    if (cpfInputCidadao) {
        cpfInputCidadao.addEventListener('input', function() {
            cpfMask(this);
        });
    }

    if (cpfInputAdministrador) {
        cpfInputAdministrador.addEventListener('input', function() {
            cpfMask(this);
        });
    }
    
    if (formCidadao) {
        formCidadao.addEventListener('submit', function(event) {
            handleFormValidation(event, this);
        });
    }

    if (formAdministrador) {
        formAdministrador.addEventListener('submit', function(event) {
             handleFormValidation(event, this);
        });
    }
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

     /*Seleção de botões da pagina de detlahes de ocorrência do adm*/

     document.querySelectorAll('.btnstatus').forEach(button => {
            button.addEventListener('click', function() {
                
                document.querySelectorAll('.btnstatus').forEach(btn => btn.classList.remove('selected'));
                
                this.classList.add('selected');
                
        
                const statusValue = this.textContent.trim().toLowerCase().replace(' ', '-');
                document.getElementById('status-input').value = statusValue;
            });
        });

        document.querySelector('.btnstatus.status-pendente').classList.add('selected');