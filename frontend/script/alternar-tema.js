
document.addEventListener('DOMContentLoaded', function() {
    const corpoDaPagina = document.body;
    const botaoTema = document.getElementById('botao-tema');

    // Função para alternar o modo escuro
    function alternarTema() {
        corpoDaPagina.classList.toggle('modo-escuro');

        // Mudar o ícone e texto do botão
        if (corpoDaPagina.classList.contains('modo-escuro')) {
            botaoTema.textContent = '☀️';
            botaoTema.title = 'Desativar Modo Escuro';
        } else {
            botaoTema.textContent = '🌙';
            botaoTema.title = 'Ativar Modo Escuro';
        }

        // Salvar a preferência no localStorage
        localStorage.setItem('modoEscuro', corpoDaPagina.classList.contains('modo-escuro'));
    }

    // Verificar preferência salva
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'true') {
        corpoDaPagina.classList.add('modo-escuro');
        botaoTema.textContent = '☀️';
        botaoTema.title = 'Desativar Modo Escuro';
    }

    // Adicionar o evento de clique para alternar o tema
    botaoTema.addEventListener('click', alternarTema);
});