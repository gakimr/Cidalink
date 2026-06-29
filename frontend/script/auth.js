const AUTH_API = "http://localhost:3000/auth";
const USERS_API = "http://localhost:3000/users"; 

// validação do cadastro
function CadastroValidation(event, form) {
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
        const nameInput = form.querySelector('#nome') || form.querySelector('input[type="text"]:not(#cpf):not(#cargo)');
        const cpfInput = form.querySelector('#cpf');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const cargoInput = form.querySelector('#cargo');

        const name = nameInput ? nameInput.value : "Usuário Sem Nome";
        const cpfRaw = cpfInput ? cpfInput.value : "";
        const cpf = cpfRaw.replace(/\D/g, ""); 
        const cargo = cargoInput ? cargoInput.value : "";
        const email = emailInput ? emailInput.value : "";
        const password = passwordInput ? passwordInput.value : "";

        const payload = { name, email, password };
        if (cpf) payload.cpf = cpf;
        if (cargo) payload.cargo = cargo;

        console.log('Enviando dados de cadastro para a API...', payload);

        // Define a rota exata de cadastro baseado no formulário
        const endpointCadastro = (form.id === 'cadastroFormAdministrador') 
            ? `${USERS_API}/registeradm` 
            : `${USERS_API}/register`;

        fetch(endpointCadastro, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(result => {
            console.log("Resposta do servidor no Cadastro:", result);

            if (result.message === "Success" || result.message === "Sucess") {
                alert("Cadastro realizado com sucesso!");
                form.reset();
                allInputs.forEach(input => input.classList.remove('campo-invalido', 'campo-valido'));
                
                if (form.id === 'cadastroFormAdministrador') {
                    window.location.href = 'loginadm.html';
                } else {
                    window.location.href = 'logincid.html';
                }
            } else {
                alert("Erro ao cadastrar: " + (result.data || "Verifique as informações."));
            }
        })
        .catch(error => {
            console.error("Erro na requisição de cadastro:", error);
            alert("Não foi possível conectar à API de cadastro.");
        });

    } else {
        const firstError = form.querySelector('.campo-invalido');
        if (firstError) {
             firstError.reportValidity(); 
             firstError.focus();
        }
    }
}

// (LOGIN E CADASTRO)
document.addEventListener('DOMContentLoaded', function() {
    
    // cadastro do Cidadão
    const formCadastroCidadao = document.getElementById('cadastroFormCidadao');
    if (formCadastroCidadao) {
        formCadastroCidadao.addEventListener('submit', function(event) {
            CadastroValidation(event, this);
        });
    }

    // cadastro do Administrador
    const formCadastroAdministrador = document.getElementById('cadastroFormAdministrador');
    if (formCadastroAdministrador) {
        formCadastroAdministrador.addEventListener('submit', function(event) {
             CadastroValidation(event, this);
        });
    }

    //Login do Cidadão 
    const botaoEntrarCid = document.getElementById('btnEntrarCid');
    if (botaoEntrarCid) {
        botaoEntrarCid.addEventListener('click', function(event) {
            event.preventDefault(); 
            const form = document.getElementById('formLoginCid') || botaoEntrarCid.closest('form');
            
            if (!form) {
                alert("Erro: Formulário de login do cidadão não encontrado.");
                return;
            }

            const email = form.querySelector('input[type="email"]')?.value;
            const password = form.querySelector('input[type="password"]')?.value;

            if (!email || !password) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            console.log("Tentando realizar login do cidadão assíncrono...");

            fetch(`${AUTH_API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(result => {
                console.log("Resposta recebida do authController (Cidadão):", result);

                if (result.message === "Success") {
                    alert("Login efetuado com sucesso!");
                    sessionStorage.setItem("usuarioLogado", JSON.stringify(result.data));
                    sessionStorage.setItem("tipoUsuario", "cidadao");
                    window.location.href = '../app/inicial.html'; 
                } else {
                    alert("Falha no login: " + (result.data || "Credenciais incorretas."));
                }
            })
            .catch(error => {
                console.error("Erro na rota assíncrona de login:", error);
                alert("Erro ao se conectar com o servidor de autenticação.");
            });
        });
    }

    //Login do Administrador
    const btnEntrarAdmin = document.getElementById('btnEntrarAdmin');
    if (btnEntrarAdmin) {
        btnEntrarAdmin.addEventListener('click', function(event) {
            event.preventDefault(); 
            const form = document.getElementById('formLoginAdm') || btnEntrarAdmin.closest('form');
            
            if (!form) {
                alert("Erro: Formulário de login do administrador não encontrado.");
                return;
            }

            const email = form.querySelector('input[type="email"]')?.value;
            const password = form.querySelector('input[type="password"]')?.value;

            if (!email || !password) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            console.log("Tentando realizar login administrativo assíncrono...");

            fetch(`${AUTH_API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }) 
            })
            .then(response => response.json())
            .then(result => {
                console.log("Resposta recebida do authController (Admin):", result);

                if (result.message === "Success") {
                    alert("Login administrativo efetuado!");
                    sessionStorage.setItem("usuarioLogado", JSON.stringify(result.data));
                    sessionStorage.setItem("tipoUsuario", "admin");
                    window.location.href = '../adm/inicialadm.html'; 
                } else {
                    alert("Falha no login administrativo: " + (result.data || "Verifique suas credenciais."));
                }
            })
            .catch(error => {
                console.error("Erro no login administrativo:", error);
                alert("Erro ao se conectar com o servidor de autenticação.");
            });
        });
    }
});