/* language.js */

function changeLanguage(lang) {
    // Objeto com todas as traduções para os idiomas suportados
    const translations = {
        'pt': {
            'banner_h1': 'Cidalink: A cidadania ativa começa por você.',
            'banner_p': 'Reporte, acompanhe e resolva problemas urbanos. Dê o primeiro passo.',
            'btn_citizen': 'Acessar Cidadão',
            'btn_admin': 'Acessar Administrador',
            'cards_title': 'Como o CidaLink funciona?',
            'card1_h3': '1. Reporte Simples de Ocorrências',
            'card1_p': 'Tirar uma foto, descrever o problema e enviar. Em minutos, sua ocorrência está no mapa da cidade. A simplicidade torna a ação imediata.',
            'card2_h3': '2. Acompanhamento e Transparência em Tempo Real',
            'card2_p': 'Chega de "protocolos" que somem. Acompanhe o status do seu chamado e a solução final. Com o CidaLink, a transparência não é promessa, é regra.',
            'card3_h3': '3. Fórum de Comunidade e Colaboração',
            'card3_p': 'Sua participação vale ouro. Use o Fórum para discutir soluções com seus vizinhos e apoiar demandas. Fortaleça a voz coletiva!',
            'credibility_h2': 'Transparência Que Gera Ação, Não Atraso.',
            'credibility_p': 'O CidaLink não é apenas um livro de reclamações. É uma ferramenta de gestão. Garantimos que sua solicitação chegue, seja respondida e que o progresso seja visível para toda a comunidade.',
            'credibility_cta': 'Começe a Transformar Agora!',
            'footer_text': 'Cidalink. Todos os direitos reservados.',
            'select_language': 'Selecionar idioma',
        },
        'en': {
            'banner_h1': 'CidaLink: Active citizenship starts with you.',
            'banner_p': 'Report, track, and solve urban issues. Take the first step.',
            'btn_citizen': 'Access Citizen',
            'btn_admin': 'Access Administrator',
            'cards_title': 'How does CidaLink work?',
            'card1_h3': '1. Simple Occurrence Reporting',
            'card1_p': 'Take a photo, describe the problem, and send it. In minutes, your occurrence is on the city map. Simplicity makes the action immediate.',
            'card2_h3': '2. Real-Time Tracking and Transparency',
            'card2_p': 'No more "protocols" that disappear. Track the status of your call and the final solution. With CidaLink, transparency is the rule, not the promise.',
            'card3_h3': '3. Community and Collaboration Forum',
            'card3_p': 'Your participation is golden. Use the Forum to discuss solutions with your neighbors and support demands. Strengthen the collective voice!',
            'credibility_h2': 'Transparency That Drives Action, Not Delay.',
            'credibility_p': 'CidaLink is not just a complaint book. It is a management tool. We ensure your request arrives, is answered, and that progress is visible to the entire community.',
            'credibility_cta': 'Start Transforming Now!',
            'footer_text': 'Cidalink. All rights reserved.',
            'select_language': 'Select language',
        },
        'es': {
            'banner_h1': 'CidaLink: La ciudadanía activa comienza contigo.',
            'banner_p': 'Reporta, rastrea y resuelve problemas urbanos. Da el primer paso.',
            'btn_citizen': 'Acceder Ciudadano',
            'btn_admin': 'Acceder Administrador',
            'cards_title': '¿Cómo funciona CidaLink?',
            'card1_h3': '1. Reporte Simple de Incidencias',
            'card1_p': 'Toma una foto, describe el problema y envíalo. En minutos, tu incidencia está en el mapa de la ciudad. La simplicidad hace que la acción sea inmediata.',
            'card2_h3': '2. Seguimiento y Transparencia en Tiempo Real',
            'card2_p': 'No más "protocolos" que desaparecen. Sigue el estado de tu llamada y la solución final. Con CidaLink, la transparencia no es promesa, es regla.',
            'card3_h3': '3. Foro Comunitario y Colaboración',
            'card3_p': 'Tu participación vale oro. Usa el Foro para discutir soluciones con tus vecinos y apoyar demandas. ¡Fortalece la voz colectiva!',
            'credibility_h2': 'Transparencia Que Genera Acción, No Demora.',
            'credibility_p': 'CidaLink no es solo un libro de quejas. Es una herramienta de gestión. Garantizamos que tu solicitud llegue, sea respondida y que el progreso sea visible para toda la comunidad.',
            'credibility_cta': '¡Empieza a Transformar Ahora!',
            'footer_text': 'Cidalink. Todos los derechos reservados.',
            'select_language': 'Seleccionar idioma',
        },
        'fr': {
            'banner_h1': 'CidaLink: La citoyenneté active commence avec vous.',
            'banner_p': 'Signalez, suivez et résolvez les problèmes urbains. Faites le premier pas.',
            'btn_citizen': 'Accéder Citoyen',
            'btn_admin': 'Accéder Administrateur',
            'cards_title': 'Comment fonctionne CidaLink ?',
            'card1_h3': '1. Signalement Simple d\'Incidence',
            'card1_p': 'Prenez une photo, décrivez le problème et envoyez-le. En quelques minutes, votre incidence est sur la carte de la ville. La simplicité rend l\'action immédiate.',
            'card2_h3': '2. Suivi et Transparência en Temps Réel',
            'card2_p': 'Fini les "protocolos" qui disparaissent. Suivez l\'état de votre appel et la solution finale. Avec CidaLink, la transparence est la règle, pas la promesse.',
            'card3_h3': '3. Forum Communautaire et Collaboration',
            'card3_p': 'Votre participation vaut de l\'or. Utilisez le Forum pour discuter de solutions avec vos voisins et soutenir les demandes. Renforcez la voix collective !',
            'credibility_h2': 'Transparência Qui Génère de l\'Action, Pas de Retard.',
            'credibility_p': 'CidaLink n\'est pas seulement un livre de plaintes. C\'est un outil de gestion. Nous nous assurons que votre demande arrive, qu\'elle soit traitée et que les progrès soient visibles pour toute la communauté.',
            'credibility_cta': 'Commencez à Transformer Maintenant !',
            'footer_text': 'Cidalink. Tous droits réservés.',
            'select_language': 'Sélectionner la langue',
        }
    };

    // Aplicar traduções
    if (translations[lang]) {
        const translation = translations[lang];
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                 if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', translation[key]);
                } else if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation[key]);
                } else {
                    element.innerHTML = translation[key];
                }
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    /* =================================================
        Bloco do Seletor de Idioma (Início)
        =================================================
    */
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) { 
        const languageBtn = languageSelector.querySelector('.language-btn');
        const languageOptions = languageSelector.querySelectorAll('.language-option');
        const currentLangText = languageBtn.querySelector('span');
        
        // Abrir/fechar dropdown
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });

        // Selecionar idioma
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                // Remover classe active de todas as opções
                languageOptions.forEach(opt => opt.classList.remove('active'));
                // Adicionar classe active à opção selecionada
                this.classList.add('active');

                // Atualizar texto do botão
                const langText = this.querySelector('span').textContent;
                currentLangText.textContent = langText;
                
                // Fechar dropdown
                languageSelector.classList.remove('active');
                
                // Salvar preferência no localStorage
                localStorage.setItem('preferred-language', lang);
                
                // Mudar o conteúdo do site (A função changeLanguage é global)
                changeLanguage(lang);
            });
        });

        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function() {
            languageSelector.classList.remove('active');
        });

        // Prevenir fechamento ao clicar dentro do dropdown
        languageSelector.querySelector('.language-dropdown').addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Carregar idioma salvo (Executa a lógica de tradução na inicialização)
        const savedLang = localStorage.getItem('preferred-language') || 'pt';
        const savedOption = languageSelector.querySelector(`[data-lang="${savedLang}"]`);
        
        // Simular um clique na opção salva para aplicar a linguagem
        if (savedOption) {
            savedOption.click(); 
        } else {
            // Garante que o 'pt' (padrão) seja aplicado e marcado, se nada for salvo.
            changeLanguage('pt');
            languageSelector.querySelector(`[data-lang="pt"]`).classList.add('active'); 
        }
    }
    /* =================================================
        Bloco do Seletor de Idioma (Fim)
        =================================================
    */

});