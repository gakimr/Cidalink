function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
    }, 'google_translate_element');
}

function changeLanguage(lang) {
    const combo = document.querySelector('.goog-te-combo');

    if (!combo) return;

    // força a troca mesmo se o idioma anterior era o mesmo
    combo.value = '';

    setTimeout(() => {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
    }, 50);
}