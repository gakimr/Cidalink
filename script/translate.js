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
            'footer_text': '2025 Cidalink. Todos os direitos reservados.',
            'select_language': 'Selecionar idioma',
            //Cadastros e Acessibilidade
            'title_citizen_register': 'CidaLink - Cadastro Cidadão',
            'title_admin_register': 'CidaLink - Cadastro Administrador',
            'h2_citizen_register': 'Cadastro Cidadão',
            'h2_admin_register': 'Cadastro Administrador',
            'label_fullname': 'Nome Completo',
            'label_cpf': 'CPF',
            'label_position': 'Cargo',
            'label_email': 'E-mail',
            'label_password': 'Senha',
            'label_confirm_password': 'Confirmar Senha',
            'btn_register': 'Cadastrar',
            'p_already_have_account': 'Já possui uma conta?',
            'btn_login': 'Login',
            'accessibility_btn_aria': 'Configurações de acessibilidade',
            'toggle_dark_mode_aria': 'Alternar modo escuro',
            'accessibility_h3': 'Configurações de Visão',
            'accessibility_p': 'Ajuste as cores para diferentes tipos de daltonismo',
            'option_normal': 'Visão Normal',
            'option_protanopia': 'Protanopia',
            'option_protanomalia': 'Protanomalia',
            'option_deuteranopia': 'Deuteranopia',
            'option_deuteranomalia': 'Deuteranomalia',
            'option_tritanopia': 'Tritanopia',
            'option_tritanomalia': 'Tritanomalia',
            'option_acromatopsia': 'Acromatopsia',
            'option_acromatomalia': 'Acromatomalia',
            'reset_colors': 'Restaurar Cores Padrão',
            // LOGIN
            'title_citizen_login': 'CidaLink - Login Cidadão',
            'title_admin_login': 'CidaLink - Login Administrador',
            'h2_enter_cidalink': 'Entrar no CidaLink',
            'h3_citizen': 'Cidadão',
            'h3_admin': 'Administrador',
            'label_user': 'Usuário',
            'label_password': 'Senha',
            'btn_login_submit': 'Entrar',
            'a_forgot_password': 'Esqueceu a senha?',
            'p_no_account': 'Ainda não tem uma conta?',
            'btn_register_login': 'Cadastre-se',
            // RECUPERAÇÃO DE SENHA
            'title_recover_password': 'CidaLink - Recuperar a senha',
            'h2_recover_password': 'Recuperar Senha',
            'p_recover_instruction': 'Informe seu e-mail para receber um link de redefinição de senha.',
            'btn_send_link': 'Enviar Link de Redefinição',
            'a_back_to_login': 'Voltar para o Login',
            // Menu 
            'menu_title': 'Menu',
            'menu_notifications': 'Notificações',
            'menu_home': 'Página Inicial',
            'menu_create_occurrence': 'Criar Ocorrência',
            'menu_map': 'Mapa',
            'menu_chat': 'Bate-papo',
            'menu_profile': 'Meu Perfil',
            'menu_logout': 'Sair',
            'float_button_messages': 'Mensagens',
            //Inicial
            'cid_feed1': 'Cidadão 1',
            'cid_feed2': 'Cidadão 2',
            'cid_feed3': 'Cidadão 3',
            'cid_bairro1': 'Bairro Tal',
            'cid_bairro2': 'Centro',
            'cid_bairro3': 'Avenida Principal',
            'ocdesc1': 'Sérios problemas de iluminação na Rua B, Postes com lampadas sem funcionar!',
            'ocdesc2': 'Descarte irregular de lixo na Av. C! O acúmulo está atraindo insetos.',
            'ocdesc3': 'Buraco na rodovia com risco de acidentes!!'




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
            'footer_text': '2025 Cidalink. All rights reserved.',
            'select_language': 'Select language',
            // Cadastros e acessibilidade
            'title_citizen_register': 'CidaLink - Citizen Registration',
            'title_admin_register': 'CidaLink - Administrator Registration',
            'h2_citizen_register': 'Citizen Registration',
            'h2_admin_register': 'Administrator Registration',
            'label_fullname': 'Full Name',
            'label_cpf': 'CPF',
            'label_position': 'Position',
            'label_email': 'E-mail',
            'label_password': 'Password',
            'label_confirm_password': 'Confirm Password',
            'btn_register': 'Register',
            'p_already_have_account': 'Already have an account?',
            'btn_login': 'Login',
            'accessibility_btn_aria': 'Accessibility settings',
            'toggle_dark_mode_aria': 'Toggle dark mode',
            'accessibility_h3': 'Vision Settings',
            'accessibility_p': 'Adjust colors for different types of color blindness',
            'option_normal': 'Normal Vision',
            'option_protanopia': 'Protanopia',
            'option_protanomalia': 'Protanomalia',
            'option_deuteranopia': 'Deuteranopia',
            'option_deuteranomalia': 'Deuteranomalia',
            'option_tritanopia': 'Tritanopia',
            'option_tritanomalia': 'Tritanomalia',
            'option_acromatopsia': 'Achromatopsia',
            'option_acromatomalia': 'Achromatomaly',
            'reset_colors': 'Restore Default Colors',
            // LOGIN 
            'title_citizen_login': 'CidaLink - Citizen Login',
            'title_admin_login': 'CidaLink - Administrator Login',
            'h2_enter_cidalink': 'Enter CidaLink',
            'h3_citizen': 'Citizen',
            'h3_admin': 'Administrator',
            'label_user': 'User',
            'label_password': 'Password',
            'btn_login_submit': 'Enter',
            'a_forgot_password': 'Forgot your password?',
            'p_no_account': 'Don\'t have an account yet?',
            'btn_register_login': 'Register',
            // RECUPERAR SENHA
            'title_recover_password': 'CidaLink - Recover Password',
            'h2_recover_password': 'Recover Password',
            'p_recover_instruction': 'Enter your email to receive a password reset link.',
            'btn_send_link': 'Send Reset Link',
            'a_back_to_login': 'Back to Login',
            // Menu 
            'menu_title': 'Menu',
            'menu_notifications': 'Notifications',
            'menu_home': 'Home Page',
            'menu_create_occurrence': 'Create Occurrence',
            'menu_map': 'Map',
            'menu_chat': 'Chat',
            'menu_profile': 'My Profile',
            'menu_logout': 'Logout',
            'float_button_messages': 'Messages',
             //Inicial
             'cid_feed1': 'Citizen 1',
             'cid_feed2': 'Citizen 2',
             'cid_feed3': 'Citizen 3',
             'cid_bairro1': 'Neighborhood',
             'cid_bairro2': 'Downtown',
             'cid_bairro3': 'Main Avenue',
             'ocdesc1': 'Serious lighting problems on Rua B, streetlights with non-functioning bulbs!',
             'ocdesc2': 'Illegal dumping of trash on Avenue C! The accumulation is attracting insects.',
             'ocdesc3': 'Pothole on the highway posing a risk of accidents!!'

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
            'footer_text': '2025 Cidalink. Todos los derechos reservados.',
            'select_language': 'Seleccionar idioma',
            //Cadastros e acessibilidade
            'title_citizen_register': 'CidaLink - Registro Ciudadano',
            'title_admin_register': 'CidaLink - Registro Administrador',
            'h2_citizen_register': 'Registro Ciudadano',
            'h2_admin_register': 'Registro Administrador',
            'label_fullname': 'Nombre Completo',
            'label_cpf': 'CPF',
            'label_position': 'Cargo',
            'label_email': 'Correo Electrónico',
            'label_password': 'Contraseña',
            'label_confirm_password': 'Confirmar Contraseña',
            'btn_register': 'Registrar',
            'p_already_have_account': '¿Ya tienes una cuenta?',
            'btn_login': 'Iniciar Sesión',
            'accessibility_btn_aria': 'Configuración de accesibilidad',
            'toggle_dark_mode_aria': 'Alternar modo oscuro',
            'accessibility_h3': 'Configuración de Visión',
            'accessibility_p': 'Ajusta los colores para diferentes tipos de daltonismo',
            'option_normal': 'Visión Normal',
            'option_protanopia': 'Protanopía',
            'option_protanomalia': 'Protanomalía',
            'option_deuteranopia': 'Deuteranopía',
            'option_deuteranomalia': 'Deuteranomalía',
            'option_tritanopia': 'Tritanopía',
            'option_tritanomalia': 'Tritanomalía',
            'option_acromatopsia': 'Acromatopsia',
            'option_acromatomalia': 'Acromatomalia',
            'reset_colors': 'Restaurar Colores Predeterminados',
            // LOGIN
            'title_citizen_login': 'CidaLink - Inicio de Sesión Ciudadano',
            'title_admin_login': 'CidaLink - Inicio de Sesión Administrador',
            'h2_enter_cidalink': 'Entrar en CidaLink',
            'h3_citizen': 'Ciudadano',
            'h3_admin': 'Administrador',
            'label_user': 'Usuario',
            'label_password': 'Contraseña',
            'btn_login_submit': 'Entrar',
            'a_forgot_password': '¿Olvidaste tu contraseña?',
            'p_no_account': '¿Aún no tienes una cuenta?',
            'btn_register_login': 'Registrarse',
            //RECUPERAR SENHA
            'title_recover_password': 'CidaLink - Recuperar Contraseña',
            'h2_recover_password': 'Recuperar Contraseña',
            'p_recover_instruction': 'Introduce tu correo electrónico para recibir un enlace de restablecimiento de contraseña.',
            'btn_send_link': 'Enviar Enlace de Restablecimiento',
            'a_back_to_login': 'Volver al Inicio de Sesión',
            // Menu 
            'menu_title': 'Menú',
            'menu_notifications': 'Notificaciones',
            'menu_home': 'Página de Inicio',
            'menu_create_occurrence': 'Crear Incidencia',
            'menu_map': 'Mapa',
            'menu_chat': 'Chat',
            'menu_profile': 'Mi Perfil',
            'menu_logout': 'Salir',
            'float_button_messages': 'Mensajes',
             //Inicial
             'cid_feed1': 'Ciudadano1',
             'cid_feed2': 'Ciudadano2',
             'cid_feed3': 'Ciudadano 3',
             'cid_bairro1': 'Vecindario',
             'cid_bairro2': 'Centro',
             'cid_bairro3': 'Avenida Principal',
             'ocdesc1': 'Graves problemas de iluminación en la Rua B, farolas con bombillas que no funcionan!',
             'ocdesc2': '¡Vertido ilegal de basura en la Avenida C! La acumulación atrae insectos.',
             'ocdesc3': '¡¡¡Bache en la carretera que supone riesgo de accidentes!!!'


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
            'footer_text': '2025 Cidalink. Tous droits réservés.',
            'select_language': 'Sélectionner la langue',
            //cadastros e acessibilidade
            'title_citizen_register': 'CidaLink - Inscription Citoyen',
            'title_admin_register': 'CidaLink - Inscription Administrateur',
            'h2_citizen_register': 'Inscription Citoyen',
            'h2_admin_register': 'Inscription Administrateur',
            'label_fullname': 'Nom Complet',
            'label_cpf': 'CPF',
            'label_position': 'Poste',
            'label_email': 'E-mail',
            'label_password': 'Mot de Passe',
            'label_confirm_password': 'Confirmer Mot de Passe',
            'btn_register': 'S\'inscrire',
            'p_already_have_account': 'Vous avez déjà un compte ?',
            'btn_login': 'Connexion',
            'accessibility_btn_aria': 'Paramètres d\'accessibilité',
            'toggle_dark_mode_aria': 'Basculer mode sombre',
            'accessibility_h3': 'Paramètres de Vision',
            'accessibility_p': 'Ajustez les couleurs pour différents types de daltonisme',
            'option_normal': 'Vision Normale',
            'option_protanopia': 'Protanopie',
            'option_protanomalia': 'Protanomalie',
            'option_deuteranopia': 'Deutéranopie',
            'option_deuteranomalia': 'Deutéranomalie',
            'option_tritanopia': 'Tritanopie',
            'option_tritanomalia': 'Tritanomalie',
            'option_acromatopsia': 'Achromatopsie',
            'option_acromatomalia': 'Achromatomalie',
            'reset_colors': 'Restaurer Couleurs par Défaut',
            //LOGIN
            'title_citizen_login': 'CidaLink - Connexion Citoyen',
            'title_admin_login': 'CidaLink - Connexion Administrateur',
            'h2_enter_cidalink': 'Entrer dans CidaLink',
            'h3_citizen': 'Citoyen',
            'h3_admin': 'Administrateur',
            'label_user': 'Utilisateur',
            'label_password': 'Mot de Passe',
            'btn_login_submit': 'Entrer',
            'a_forgot_password': 'Mot de passe oublié?',
            'p_no_account': 'Vous n\'avez pas encore de compte?',
            'btn_register_login': 'S\'inscrire',
            //RECUPERAR SENHA
            'title_recover_password': 'CidaLink - Récupérer Mot de Passe',
            'h2_recover_password': 'Récupérer Mot de Passe',
            'p_recover_instruction': 'Entrez votre e-mail pour recevoir un lien de réinitialisation du mot de passe.',
            'btn_send_link': 'Envoyer Lien de Réinitialisation',
            'a_back_to_login': 'Retour à la Connexion',
            // Menu 
            'menu_title': 'Menu',
            'menu_notifications': 'Notifications',
            'menu_home': 'Page d\'accueil',
            'menu_create_occurrence': 'Créer une Incidência',
            'menu_map': 'Carte',
            'menu_chat': 'Discussion',
            'menu_profile': 'Mon Profil',
            'menu_logout': 'Déconnexion',
            'float_button_messages': 'Messages',
            //Inicial
            'cid_feed1': 'Citoyen 1',
            'cid_feed2': 'Citoyen 2',
            'cid_feed3': 'Citoyen 3',
            'cid_bairro1': 'Bairro Tal',
            'cid_bairro2': 'Centre',
            'cid_bairro3': 'Avenue Principale',
            'ocdesc1': 'Graves problèmes d éclairage sur la Rua B, lampadaires avec des ampoules défectueuses !',
            'ocdesc2': 'Dépôt illégal de déchets sur l avenue C ! Cette accumulation attire les insectes.',
            'ocdesc3': 'Nid-de-poule sur l autoroute, risque d accidents !'
            
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