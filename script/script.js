
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
            window.location.href = 'logincid.html';
        });
    }

    if (btnAdministrador) {
        btnAdministrador.addEventListener('click', function() {
            window.location.href = 'loginadm.html'; 
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
    const botaoEntrar = document.querySelector('.btnEntrar');
    if (botaoEntrar) {
        botaoEntrar.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = 'inicial.html'; 
        });
    }


    /*Mapa */
    const mapMarkers = document.querySelectorAll('.mapamarc');
    const occurrencePopup = document.getElementById('occurrencePopup');
    const popupTitle = document.getElementById('popupTitulo');
    const popupDescription = document.getElementById('popupDescricao');

    mapMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const title = this.dataset.title;
            const description = this.dataset.description;

            popupTitle.textContent = title;
            popupDescription.textContent = description;

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