
document.addEventListener('DOMContentLoaded', function() {
    const corpoDaPagina = document.body;
    const botaoTema = document.getElementById('botao-tema');

    function alternarTema() {
        corpoDaPagina.classList.toggle('modo-escuro');

        if (corpoDaPagina.classList.contains('modo-escuro')) {
            botaoTema.textContent = '☀️';
            botaoTema.title = 'Desativar Modo Escuro';
        } else {
            botaoTema.textContent = '🌙';
            botaoTema.title = 'Ativar Modo Escuro';
        }

        localStorage.setItem('modoEscuro', corpoDaPagina.classList.contains('modo-escuro'));
    }

    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'true') {
        corpoDaPagina.classList.add('modo-escuro');
        botaoTema.textContent = '☀️';
        botaoTema.title = 'Desativar Modo Escuro';
    }

    botaoTema.addEventListener('click', alternarTema);
});