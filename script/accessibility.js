document.addEventListener('DOMContentLoaded', function() {
    const accessibilityBtn = document.getElementById('accessibilityBtn');
    const accessibilityDropdown = document.getElementById('accessibilityDropdown');
    const resetBtn = document.getElementById('resetAccessibility');
    const accessibilityOptions = document.querySelectorAll('.accessibility-option');
    
    
    if (accessibilityBtn) {
        accessibilityBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            accessibilityDropdown.classList.toggle('active');
        });
    }
    
   
    document.addEventListener('click', function() {
        if (accessibilityDropdown) {
            accessibilityDropdown.classList.remove('active');
        }
    });
    
   
    if (accessibilityDropdown) {
        accessibilityDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    accessibilityOptions.forEach(option => {
        option.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            
            document.body.className = document.body.className.replace(/\b(protanopia|protanomalia|deuteranopia|deuteranomalia|tritanopia|tritanomalia|acromatopsia|acromatomalia)\b/g, '');
            

            if (filterType !== 'normal') {
                document.body.classList.add(filterType);
            }
            
          
            accessibilityOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            
            try { localStorage.setItem('colorAccessibility', filterType); } catch(e){}
            
           
            accessibilityDropdown.classList.remove('active');
        });
    });
    
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            document.body.className = document.body.className.replace(/\b(protanopia|protanomalia|deuteranopia|deuteranomalia|tritanopia|tritanomalia|acromatopsia|acromatomalia)\b/g, '');
            
          
            accessibilityOptions.forEach(opt => opt.classList.remove('active'));
            
            const normalOption = document.querySelector('.accessibility-option[data-filter="normal"]');
            if (normalOption) { normalOption.classList.add('active'); }
            
           
            try { localStorage.removeItem('colorAccessibility'); } catch(e){}
          
            accessibilityDropdown.classList.remove('active');
        });
    }
    
    const savedPreference = (function(){ try { return localStorage.getItem('colorAccessibility'); } catch(e) { return null; }})();
    if (savedPreference) {
        document.body.classList.add(savedPreference);
        const savedOption = document.querySelector(`.accessibility-option[data-filter="${savedPreference}"]`);
        if (savedOption) { savedOption.classList.add('active'); }
    } else {
        const normalOption = document.querySelector('.accessibility-option[data-filter="normal"]');
        if (normalOption) { normalOption.classList.add('active'); }
    }
});



const mainBtn = document.getElementById('mainAccessibilityBtn');
const dropdown = document.getElementById('mainAccessibilityDropdown');
const darkModeBtn = document.getElementById('toggleDarkMode');

// abrir/fechar menu
mainBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

// fechar ao clicar fora
document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

// MODO ESCURO
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');

    localStorage.setItem(
        'modoEscuro',
        document.body.classList.contains('modo-escuro')
    );
});

// carregar modo escuro salvo
if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('modo-escuro');
}