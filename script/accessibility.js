// Controle do menu de acessibilidade: daltonismo + tema escuro
 document.addEventListener('DOMContentLoaded', function() {
    const accessibilityBtn = document.getElementById('accessibilityBtn');
    const accessibilityDropdown = document.getElementById('accessibilityDropdown');
    const resetBtn = document.getElementById('resetAccessibility');
    const accessibilityOptions = document.querySelectorAll('.accessibility-option');
    const themeBtn = document.getElementById('botao-tema');
    const filterClasses = 'protanopia protanomalia deuteranopia deuteranomalia tritanopia tritanomalia acromatopsia acromatomalia'.split(' ');

    function updateThemeButton() {
        if (!themeBtn) return;
        if (document.body.classList.contains('modo-escuro')) {
            themeBtn.textContent = '☀️';
            themeBtn.title = 'Desativar Modo Escuro';
        } else {
            themeBtn.textContent = '🌙';
            themeBtn.title = 'Ativar Modo Escuro';
        }
    }

    function clearDaltonismFilters() {
        document.body.classList.remove(...filterClasses);
    }

    function setActiveOption(filterType) {
        accessibilityOptions.forEach(opt => opt.classList.remove('active'));
        const activeOption = document.querySelector(`.accessibility-option[data-filter="${filterType}"]`);
        if (activeOption) activeOption.classList.add('active');
    }

    // Alternar visibilidade do menu
    if (accessibilityBtn && accessibilityDropdown) {
        accessibilityBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            accessibilityDropdown.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar fora
    document.addEventListener('click', function() {
        if (accessibilityDropdown) accessibilityDropdown.classList.remove('active');
    });

    // Prevenir fechamento ao clicar dentro do menu
    if (accessibilityDropdown) {
        accessibilityDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Aplicar filtro de daltonismo ou tema escuro
    accessibilityOptions.forEach(option => {
        option.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');

            clearDaltonismFilters();

            if (filterType === 'darkmode') {
                document.body.classList.add('modo-escuro');
                try { localStorage.setItem('modoEscuro', 'true'); } catch(e){}
            } else if (filterType === 'normal') {
                document.body.classList.remove('modo-escuro');
                try { localStorage.setItem('modoEscuro', 'false'); } catch(e){}
            } else {
                document.body.classList.add(filterType);
            }

            updateThemeButton();
            setActiveOption(filterType);

            // Salvar preferência
            try { localStorage.setItem('colorAccessibility', filterType); } catch(e){}

            // Fechar menu
            if (accessibilityDropdown) accessibilityDropdown.classList.remove('active');
        });
    });

    // Restaurar cores padrão
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            clearDaltonismFilters();
            document.body.classList.remove('modo-escuro');
            updateThemeButton();
            setActiveOption('normal');

            // Remover preferência salva
            try {
                localStorage.removeItem('colorAccessibility');
                localStorage.setItem('modoEscuro', 'false');
            } catch(e){}

            // Fechar menu
            if (accessibilityDropdown) accessibilityDropdown.classList.remove('active');
        });
    }

    // Carregar preferência salva
    const savedPreference = (function(){ try { return localStorage.getItem('colorAccessibility'); } catch(e) { return null; }})();
    if (savedPreference === 'darkmode') {
        document.body.classList.add('modo-escuro');
        updateThemeButton();
        setActiveOption('darkmode');
    } else if (savedPreference && filterClasses.includes(savedPreference)) {
        document.body.classList.add(savedPreference);
        setActiveOption(savedPreference);
    } else {
        setActiveOption('normal');
    }
});
