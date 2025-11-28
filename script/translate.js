/* language.js */

// ATENÇÃO: O objeto translations é declarado globalmente (window.translations)
// para ser acessível em outros scripts (como script.js)
window.translations = {
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
        'menu_gerenciar': 'Gerenciar Ocorrências',
        'float_button_messages': 'Mensagens',
        //Inicial
        'cid_feed1': 'Cidadão 1',
        'cid_feed2': 'Cidadão 2',
        'cidfeed3': 'Cidadão 3',
        'cid_bairro1': 'Bairro Tal',
        'cid_bairro2': 'Centro',
        'cidbairro3': 'Avenida Principal',
        'ocdesc1': 'Sérios problemas de iluminação na Rua B, Postes com lampadas sem funcionar!',
        'ocdesc2': 'Descarte irregular de lixo na Av. C! O acúmulo está atraindo insetos.',
        'ocdesc3': 'Buraco na rodovia com risco de acidentes!!',
        'botaoresp':'Responder/atualizar',
        //CHAT
        'chat_conversations_title': 'Conversas',
        'chat_contact_admin_name': 'Administração Municipal',
        'chat_contact_admin_last_msg': 'Você: ok, obrigado!',
        'chat_contact_anamaria_last_msg': 'Alguém sabe aonde...?',
        'chat_contact_joseporto_last_msg': 'Você: ok, obrigado!',
        'chat_msg_admin_greeting': 'Olá, como podemos te ajudar',
        'chat_msg_user_prefix': 'Você:',
        'chat_msg_user_doubt': 'Tenho uma dúvida sobre a nova lei de zoneamento.',
        'chat_msg_admin_response': 'Para essa questão, por favor, entre em contato com o setor de Urbanismo.',
        'chat_msg_user_thanks': 'Ok, obrigado!',
        'chat_input_placeholder': 'Digite sua menssagem...',
        'chat_send_button': 'Enviar',
        // Mapa
        'title_map': 'CidaLink - Mapa',
        'map_title': 'Mapa de Ocorrências na Cidade',
        'map_legend_title': 'Legenda:',
        'map_pending': 'Ocorrências Pendentes',
        'map_resolved': 'Ocorrências Resolvidas',
        'map_in_progress': 'Ocorrências em Andamento',
        // POP-UPS
        'marker1_title': 'Buraco na Rua A',
        'marker1_desc': 'Grande buraco próximo à praça central.',
        'marker2_title': 'Lâmpada Queimada',
        'marker2_desc': 'Poste de luz na Rua B está sem funcionar.',
        'marker3_title': 'Lixo Acumulado',
        'marker3_desc': 'Ponto de descarte irregular na Av. C.',
        'marker4_title': 'Vazamento de Água',
        'marker4_desc': 'Vazamento significativo na Rua D',
        'marker5_title': 'Pichação',
        'marker5_desc': 'Muro de escola pichado na Rua E.',
        //Notificações
        'title_notifications': 'CidaLink - Notificações',
        'notifications_title': 'Notificações',
        'notification_supported_occurrence': 'apoiou sua ocorrência',
        'notification_shared_occurrence': 'compartilhou uma ocorrência',
        'notification_occurrence_prefix': 'A ocorrência',
        'notification_occurrence_suffix_completed': 'foi',
        'notification_status_completed': 'concluída',
        'notification_by_admin': 'pela administração.',
        'notification_city_hall_prefix': 'A',
        'city_hall_name': 'Prefeitura Municipal',
        'notification_city_hall_request_info': 'solicitou mais informações sobre sua ocorrência',
        // Traduções de tempo
         'time_5_minutes_ago': 'Há 5 minutos',
         'time_1_hour_ago': 'Há 1 hora',
        'time_yesterday_1430': 'Ontem, 14:30',
         'time_30_minutes_ago': 'Há 30 minutos',
         'title_profile': 'CidaLink - Perfil',
         //Perfil
        'h1_profile_title': 'Meu Perfil',
        'h2_registration_data': 'Dados Cadastrais',
        'btn_edit_profile': 'Editar',
        'btn_change_photo': 'Trocar Foto',
        'btn_save_changes': 'Salvar Alterações',
        'h2_my_occurrences': 'Minhas Ocorrências Reportadas',
        'oc_title_water_leak': 'Vazamento de Água na Rua A',
        'oc_title_pothole': 'Buraco na Avenida Principal',
        'oc_title_trash': 'Lixo Descartado Irregularmente',
        'oc_label_protocol': 'Protocolo',
        'oc_label_date': 'Data',
        'status_completed': 'CONCLUÍDO',
        'status_in_analysis': 'EM ANÁLISE',
        'status_rejected': 'REJEITADO',
        // OCORRENCIA 
        'title_create_occurrence': 'CidaLink - Criar Ocorrência',
        'h2_create_occurrence': 'Criar Nova Ocorrência',
        'label_select_occurrence_type': 'Criar Ocorrência',
        'option_select_type': 'Selecione o tipo',
        'option_pothole': 'Buraco na Rua',
        'option_lighting': 'Iluminação Pública',
        'option_trash': 'Acúmulo de Lixo',
        'option_sanitation': 'Problemas de Saneamento',
        'option_other': 'Outro',
        'label_detailed_description': 'Descrição Detalhada',
        'label_location': 'Localização (Endereço ou Ponto de Referência)',
        'btn_register_occurrence': 'Registrar Ocorrência',
        'label_attach_photo': 'Anexar Foto',
        
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
        'menu_gerenciar': 'Manage Incidents',
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
         'ocdesc3': 'Pothole on the highway posing a risk of accidents!!',
         'botaoresp':'Reply/update',
         //  CHAT
         'chat_conversations_title': 'Conversations',
         'chat_contact_admin_name': 'Municipal Administration',
         'chat_contact_admin_last_msg': 'You: ok, thank you!',
         'chat_contact_anamaria_last_msg': 'Does anyone know where...?',
         'chat_contact_joseporto_last_msg': 'You: ok, thank you!',
         'chat_msg_admin_greeting': 'Hello, how can we help you',
         'chat_msg_user_prefix': 'You:',
         'chat_msg_user_doubt': 'I have a doubt about the new zoning law.',
         'chat_msg_admin_response': 'For this matter, please contact the Urban Planning department.',
         'chat_msg_user_thanks': 'Ok, thank you!',
         'chat_input_placeholder': 'Type your message...',
         'chat_send_button': 'Send',
         //MAPA
         'title_map': 'CidaLink - Map',
         'map_title': 'City Occurrence Map',
         'map_legend_title': 'Legend:',
         'map_pending': 'Pending Occurrences',
         'map_resolved': 'Resolved Occurrences',
         'map_in_progress': 'Occurrences In Progress',
         // POP-UPS
        'marker1_title': 'Pothole on Street A',
        'marker1_desc': 'Large pothole near the central square.',
        'marker2_title': 'Burned Out Lamp',
        'marker2_desc': 'Street light pole on Street B is not working.',
        'marker3_title': 'Accumulated Trash',
        'marker3_desc': 'Irregular dumping spot on Ave. C.',
        'marker4_title': 'Water Leak',
        'marker4_desc': 'Significant leak on Street D',
        'marker5_title': 'Graffiti',
        'marker5_desc': 'School wall vandalized on Street E.',
        //Notificações
        'title_notifications': 'CidaLink - Notifications',
        'notifications_title': 'Notifications',
        'notification_supported_occurrence': 'supported your occurrence',
        'notification_shared_occurrence': 'shared an occurrence',
        'notification_occurrence_prefix': 'The occurrence',
        'notification_occurrence_suffix_completed': 'was',
        'notification_status_completed': 'completed',
        'notification_by_admin': 'by the administration.',
        'notification_city_hall_prefix': 'The',
        'city_hall_name': 'Municipal Administration',
        'notification_city_hall_request_info': 'requested more information about your occurrence',
        // Traduções de tempo 
        'time_5_minutes_ago': '5 minutes ago',
        'time_1_hour_ago': '1 hour ago',
        'time_yesterday_1430': 'Yesterday, 2:30 PM',
        'time_30_minutes_ago': '30 minutes ago',
        //Perfil
        'h1_profile_title': 'My Profile',
        'h2_registration_data': 'Registration Data',
        'btn_edit_profile': 'Edit',
        'btn_change_photo': 'Change Photo',
        'btn_save_changes': 'Save Changes',
        'h2_my_occurrences': 'My Reported Occurrences',
        'oc_title_water_leak': 'Water Leak on Street A',
        'oc_title_pothole': 'Pothole on Main Avenue',
        'oc_title_trash': 'Irregularly Discarded Trash',
        'oc_label_protocol': 'Protocol',
        'oc_label_date': 'Date',
        'status_completed': 'COMPLETED',
        'status_in_analysis': 'IN ANALYSIS',
        'status_rejected': 'REJECTED',
        // OCORRENCIA (Adicionar estas chaves)
        'title_create_occurrence': 'CidaLink - Create Occurrence',
        'h2_create_occurrence': 'Create New Occurrence',
        'label_select_occurrence_type': 'Create Occurrence',
        'option_select_type': 'Select type',
        'option_pothole': 'Pothole in the Street',
        'option_lighting': 'Public Lighting',
        'option_trash': 'Trash Accumulation',
        'option_sanitation': 'Sanitation Problems',
        'option_other': 'Other',
        'label_detailed_description': 'Detailed Description',
        'label_location': 'Location (Address or Landmark)',
        'btn_register_occurrence': 'Register Occurrence',
        'label_attach_photo': 'Attach Photo',
       
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
        'menu_gerenciar': 'Gestionar Incidentes',
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
         'ocdesc3':'¡¡¡Bache en la carretera que supone riesgo de accidentes!!!',
         'botaoresp':'Responder/actualizar',
         //CHAT
         'chat_conversations_title': 'Conversaciones',
         'chat_contact_admin_name': 'Administración Municipal',
         'chat_contact_admin_last_msg': 'Tú: ok, ¡gracias!',
         'chat_contact_anamaria_last_msg': '¿Alguien sabe dónde...?',
         'chat_contact_joseporto_last_msg': 'Tú: ok, ¡gracias!',
         'chat_msg_admin_greeting': 'Hola, ¿cómo podemos ayudarte',
         'chat_msg_user_prefix': 'Tú:',
         'chat_msg_user_doubt': 'Tengo una duda sobre la nueva ley de zonificación.',
         'chat_msg_admin_response': 'Para este tema, por favor, contacte con el sector de Urbanismo.',
         'chat_msg_user_thanks': 'Ok, ¡gracias!',
         'chat_input_placeholder': 'Escribe tu mensaje...',
         // Mapa
         'title_map': 'CidaLink - Mapa',
         'map_title': 'Mapa de Incidencias en la Ciudad',
         'map_legend_title': 'Leyenda:',
         'map_pending': 'Incidencias Pendientes',
         'map_resolved': 'Incidencias Resueltas',
         'map_in_progress': 'Incidencias en Progreso',
         //  POP-UPS
        'marker1_title': 'Bache en la Calle A',
        'marker1_desc': 'Gran bache cerca de la plaza central.',
        'marker2_title': 'Lámpara Quemada',
        'marker2_desc': 'Poste de luz en la Calle B no funciona.',
        'marker3_title': 'Basura Acumulada',
        'marker3_desc': 'Punto de vertido irregular en la Av. C.',
        'marker4_title': 'Fuga de Agua',
        'marker4_desc': 'Fuga significativa en la Calle D',
        'marker5_title': 'Pintada',
        'marker5_desc': 'Muro de escuela pintado en la Calle E.',
         //Notificaciones
        'title_notifications': 'CidaLink - Notificaciones',
        'notifications_title': 'Notificaciones',
        'notification_supported_occurrence': 'apoyó tu incidencia',
        'notification_shared_occurrence': 'compartió una incidencia',
        'notification_occurrence_prefix': 'La incidencia',
        'notification_occurrence_suffix_completed': 'fue',
        'notification_status_completed': 'completada',
        'notification_by_admin': 'por la administración.',
        'notification_city_hall_prefix': 'La',
        'city_hall_name': 'Administración Municipal',
        'notification_city_hall_request_info': 'solicitó más información sobre tu incidencia',
        // Traduções de tempo 
        'time_5_minutes_ago': 'Hace 5 minutos',
        'time_1_hour_ago': 'Hace 1 hora',
        'time_yesterday_1430': 'Ayer, 14:30',
        'time_30_minutes_ago': 'Hace 30 minutos',
        //Perfil
        'h1_profile_title': 'Mi Perfil',
        'h2_registration_data': 'Datos de Registro',
        'btn_edit_profile': 'Editar',
        'btn_change_photo': 'Cambiar Foto',
        'btn_save_changes': 'Guardar Cambios',
        'h2_my_occurrences': 'Mis Incidencias Reportadas',
        'oc_title_water_leak': 'Fuga de Agua en la Calle A',
        'oc_title_pothole': 'Bache en la Avenida Principal',
        'oc_title_trash': 'Basura Desechada Irregularmente',
        'oc_label_protocol': 'Protocolo',
        'oc_label_date': 'Fecha',
        'status_completed': 'COMPLETADO',
        'status_in_analysis': 'EN ANÁLISIS',
        'status_rejected': 'RECHAZADO',
         // OCORRENCIA 
        'title_create_occurrence': 'CidaLink - Crear Incidencia',
        'h2_create_occurrence': 'Crear Nueva Incidencia',
        'label_select_occurrence_type': 'Crear Incidencia',
        'option_select_type': 'Selecciona el tipo',
        'option_pothole': 'Bache en la Calle',
        'option_lighting': 'Iluminación Pública',
        'option_trash': 'Acumulación de Basura',
        'option_sanitation': 'Problemas de Saneamiento',
        'option_other': 'Otro',
        'label_detailed_description': 'Descripción Detallada',
        'label_location': 'Ubicación (Dirección o Punto de Referencia)',
        'btn_register_occurrence': 'Registrar Incidencia',
        'label_attach_photo': 'Adjuntar Foto',
        
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
        'menu_gerenciar': 'Gérer les incidents',
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
        'ocdesc3': 'Nid-de-poule sur l autoroute, risque d accidents !',
        'botaoresp':'Répondre/mettre à jour',
        // CHAT
        'chat_conversations_title': 'Conversations',
        'chat_contact_admin_name': 'Administration Municipale',
        'chat_contact_admin_last_msg': 'Vous: ok, merci !',
        'chat_contact_anamaria_last_msg': 'Quelqu\'un sait où...?',
        'chat_contact_joseporto_last_msg': 'Vous: ok, merci !',
        'chat_msg_admin_greeting': 'Bonjour, comment pouvons-nous vous aider',
        'chat_msg_user_prefix': 'Vous:',
        'chat_msg_user_doubt': 'J\'ai un doute sur la nouvelle loi de zonage.',
        'chat_msg_admin_response': 'Pour cette question, veuillez contacter le secteur de l\'Urbanisme.',
        'chat_msg_user_thanks': 'Ok, merci !',
        'chat_input_placeholder': 'Tapez votre message...',
        'chat_send_button': 'Envoyer',
        // Mapa
        'title_map': 'CidaLink - Carte',
        'map_title': 'Carte des Incidences dans la Ville',
        'map_legend_title': 'Légende:',
        'map_pending': 'Incidences en Attente',
        'map_resolved': 'Incidences Résolues',
        'map_in_progress': 'Incidences en Cours',
        // NOVAS CHAVES PARA POP-UPS
        'marker1_title': 'Nid-de-poule sur la Rue A',
        'marker1_desc': 'Grand nid-de-poule près de la place centrale.',
        'marker2_title': 'Lampe Grillée',
        'marker2_desc': 'Poteau d\'éclairage sur la Rue B ne fonctionne pas.',
        'marker3_title': 'Déchets Accumulés',
        'marker3_desc': 'Point de décharge irrégulière sur l\'Av. C.',
        'marker4_title': 'Fuite d\'Eau',
        'marker4_desc': 'Fuite importante sur la Rue D',
        'marker5_title': 'Graffiti',
        'marker5_desc': 'Mur d\'école tagué sur la Rue E.',
        'title_notifications': 'CidaLink - Notifications',
        //notificaçoes
        'notifications_title': 'Notifications',
        'notification_supported_occurrence': 'a soutenu votre incidence',
        'notification_shared_occurrence': 'a partagé une incidence',
        'notification_occurrence_prefix': 'L\'incidence',
        'notification_occurrence_suffix_completed': 'a été',
        'notification_status_completed': 'complétée',
        'notification_by_admin': 'par l\'administration.',
        'notification_city_hall_prefix': 'L\'',
        'city_hall_name': 'Administration Municipale',
        'notification_city_hall_request_info': 'a demandé plus d\'informations sur votre incidence',
        // Traduções de tempo 
        'time_5_minutes_ago': 'Il y a 5 minutes',
        'time_1_hour_ago': 'Il y a 1 heure',
        'time_yesterday_1430': 'Hier, 14h30',
        'time_30_minutes_ago': 'Il y a 30 minutes',
        //Perfil
        'h1_profile_title': 'Mon Profil',
        'h2_registration_data': 'Données d\'Inscription',
        'btn_edit_profile': 'Éditer',
        'btn_change_photo': 'Changer Photo',
        'btn_save_changes': 'Enregistrer les Modifications',
        'h2_my_occurrences': 'Mes Incidences Signalées',
        'oc_title_water_leak': 'Fuite d\'Eau sur la Rue A',
        'oc_title_pothole': 'Nid-de-poule sur l\'Avenue Principale',
        'oc_title_trash': 'Déchets Jetés Irrégulièrement',
        'oc_label_protocol': 'Protocole',
        'oc_label_date': 'Date',
        'status_completed': 'TERMINÉ',
        'status_in_analysis': 'EN COURS D\'ANALYSE',
        'status_rejected': 'REJETÉ',
        // OCORRENCIA 
        'title_create_occurrence': 'CidaLink - Créer une Incidência',
        'h2_create_occurrence': 'Créer une Nouvelle Incidência',
        'label_select_occurrence_type': 'Créer une Incidência',
        'option_select_type': 'Sélectionner le type',
        'option_pothole': 'Nid-de-poule dans la Rue',
        'option_lighting': 'Éclairage Public',
        'option_trash': 'Accumulation de Déchets',
        'option_sanitation': 'Problèmes d\'Assainissement',
        'option_other': 'Autre',
        'label_detailed_description': 'Description Détaillée',
        'label_location': 'Localisation (Adresse ou Point de Repère)',
        'btn_register_occurrence': 'Enregistrer l\'Incidence',
        'label_attach_photo': 'Joindre Photo',
        
    }
};

function changeLanguage(lang) {
    // O objeto de traduções agora é global (window.translations)
    const translations = window.translations;
    
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
   
});