const usuarioLogado = {
  id: 1,
  nome: "Eduarda",
  foto: "https://i.pravatar.cc/150?img=32"
};

const conversas = [
  {
    id: "grupo",
    nome: "Grupo CidaLink",
    foto: "CL",
    descricao: "Grupo oficial",
    online: true,
    hora: "Agora"
  },
  {
    id: "admin",
    nome: "Admin João",
    foto: "https://i.pravatar.cc/150?img=15",
    descricao: "Administrador",
    online: true,
    hora: "20:52"
  },
  {
    id: "maria",
    nome: "Maria",
    foto: "https://i.pravatar.cc/150?img=45",
    descricao: "Cidadã",
    online: false,
    hora: "19:58"
  }
];

let conversaAtual = "grupo";

let mensagens = JSON.parse(localStorage.getItem("chatCidalink")) || [
  {
    id: 1,
    conversaId: "grupo",
    autorId: 2,
    nome: "Admin João",
    foto: "https://i.pravatar.cc/150?img=15",
    texto: "Bem-vindos ao CidaLink 👋",
    hora: "19:40"
  }
];

let selecionadas = [];

const proibidas = [
  "burro", "idiota", "fdp", "caralho",
  "porra", "merda", "bosta", "sexo", "porn"
];

const listaConversas = document.getElementById("listaConversas");
const chatTopo = document.getElementById("chatTopo");
const mensagensBox = document.getElementById("mensagens");
const formChat = document.getElementById("formChat");
const textoMensagem = document.getElementById("textoMensagem");
const apagarSelecionadas = document.getElementById("apagarSelecionadas");

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function mensagemProibida(texto) {
  const limpo = normalizar(texto);

  return proibidas.some(
    palavra => limpo.includes(normalizar(palavra))
  );
}

function salvar() {
  localStorage.setItem("chatCidalink", JSON.stringify(mensagens));
}

// CORREÇÃO AQUI: Retornando strings com crases em vez de HTML puro
function criarFotoPerfil(foto) {
  if (foto === "CL") {
    return `<div class="perfil-cl">CL</div>`;
  }
  return `<img src="${foto}" alt="Foto do perfil">`;
}

function renderizarConversas() {
  listaConversas.innerHTML = "";

  conversas.forEach(c => {
    const div = document.createElement("div");

    div.className = `conversa ${c.id === conversaAtual ? "ativa" : ""}`;

    div.innerHTML = `
      ${criarFotoPerfil(c.foto)}

      <div class="info">
        <div class="info-top">
          <h3>${c.nome}</h3>
          <span>${c.hora}</span>
        </div>

        <p>${c.descricao}</p>
      </div>
    `;

    div.onclick = () => {
      conversaAtual = c.id;
      selecionadas = [];
      renderizarTudo();
    };

    listaConversas.appendChild(div);
  });
}

function renderizarTopo() {
  const conversa = conversas.find(c => c.id === conversaAtual);

  if (!conversa) return; // Evita erros caso não encontre a conversa

  chatTopo.innerHTML = `
    <div class="chat-user">
      ${criarFotoPerfil(conversa.foto)}

      <div>
        <h2>${conversa.nome}</h2>

        <div class="online">
          ${conversa.online ? "online" : "offline"}
        </div>
      </div>
    </div>
  `;
}

function renderizarMensagens() {
  mensagensBox.innerHTML = "";

  mensagens
    .filter(m => m.conversaId === conversaAtual)
    .forEach(m => {
      const eu = m.autorId === usuarioLogado.id;
      const div = document.createElement("div");

      div.className = `
        msg
        ${eu ? "eu" : "outro"}
        ${selecionadas.includes(m.id) ? "selecionada" : ""}
      `;

      div.innerHTML = `
        <img class="foto-msg" src="${m.foto}" alt="Foto do usuário">

        <div class="balao">
          <span class="nome">${m.nome}</span>
          <p class="texto">${m.texto}</p>
          <span class="hora">${m.hora}</span>
        </div>
      `;

      if (eu) {
        div.onclick = () => {
          if (selecionadas.includes(m.id)) {
            selecionadas = selecionadas.filter(id => id !== m.id);
          } else {
            selecionadas.push(m.id);
          }
          renderizarMensagens();
        };
      }

      mensagensBox.appendChild(div);
    });

  mensagensBox.scrollTop = mensagensBox.scrollHeight;
}

formChat.addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = textoMensagem.value.trim();

  if (!texto) return;

  if (mensagemProibida(texto)) {
    alert("Mensagem bloqueada.");
    textoMensagem.value = "";
    return;
  }

  const agora = new Date();
  const hora = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  mensagens.push({
    id: Date.now(),
    conversaId: conversaAtual,
    autorId: usuarioLogado.id,
    nome: usuarioLogado.nome,
    foto: usuarioLogado.foto,
    texto: texto,
    hora: hora
  });

  textoMensagem.value = "";
  salvar();
  renderizarMensagens();
});


if (apagarSelecionadas) {
  apagarSelecionadas.addEventListener("click", () => {
    if (selecionadas.length === 0) {
      alert("Clique nas suas mensagens para selecionar antes de apagar.");
      return;
    }

    mensagens = mensagens.filter(
      m => !selecionadas.includes(m.id)
    );

    selecionadas = [];
    salvar();
    renderizarMensagens();
  });
}

function renderizarTudo() {
  renderizarConversas();
  renderizarTopo();
  renderizarMensagens();
}

// Executa o app
renderizarTudo();