const API_OCORRENCIAS = "http://localhost:3000/ocorrencias";

let ocorrenciasAdm = [];

document.addEventListener("DOMContentLoaded", () => {
    carregarOcorrenciasAdm();

    const btnFiltrar = document.getElementById("btnFiltrarOcorrencias");

    if (btnFiltrar) {
        btnFiltrar.addEventListener("click", aplicarFiltrosAdm);
    }
});

async function carregarOcorrenciasAdm() {
    try {
        const resposta = await fetch(API_OCORRENCIAS);
        const resultado = await resposta.json();

        if (resultado.message === "Success") {
            ocorrenciasAdm = resultado.data;
            mostrarOcorrenciasAdm(ocorrenciasAdm);
            atualizarCardsAdm(ocorrenciasAdm);
        } else {
            alert("Erro ao carregar ocorrências.");
        }

    } catch (erro) {
        console.error("Erro ao buscar ocorrências:", erro);
        alert("Não foi possível conectar com a API.");
    }
}

function mostrarOcorrenciasAdm(lista) {
    const tbody = document.getElementById("listaOcorrenciasAdm");

    if (!tbody) return;

    tbody.innerHTML = "";

    if (lista.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6">Nenhuma ocorrência encontrada.</td>
            </tr>
        `;
        return;
    }

    lista.forEach(ocorrencia => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td data-label="ID">#${ocorrencia.id}</td>

            <td data-label="Descrição">
                ${ocorrencia.titulo || "Sem título"} - ${ocorrencia.descricao || ""}
            </td>

            <td data-label="Status">
                <span>${ocorrencia.status || "Pendente"}</span>
            </td>

            <td data-label="Prioridade">
                <span class="prioridade-media">Média</span>
            </td>

            <td data-label="Bairro">
                ${ocorrencia.bairro || "Não informado"}
            </td>

            <td data-label="Ação">
                <button class="btnadmin-small" onclick="verDetalhes(${ocorrencia.id})">
                    Detalhes
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function normalizarStatus(status) {
    return (status || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function atualizarCardsAdm(lista) {
    const pendentes = lista.filter(o =>
        normalizarStatus(o.status) === "pendente"
    ).length;

    const andamento = lista.filter(o =>
        normalizarStatus(o.status) === "em andamento"
    ).length;

    const resolvidas = lista.filter(o => {
        const status = normalizarStatus(o.status);

        return (
            status === "resolvido" ||
            status === "resolvida" ||
            status === "concluido" ||
            status === "concluida"
        );
    }).length;

    document.getElementById("totalPendentes").textContent = pendentes;
    document.getElementById("totalAndamento").textContent = andamento;
    document.getElementById("totalResolvidas").textContent = resolvidas;
}

function aplicarFiltrosAdm() {
    const busca = document.getElementById("buscaOcorrencia").value.toLowerCase();
    const statusFiltro = document.getElementById("filtroStatus").value;

    let filtradas = ocorrenciasAdm.filter(ocorrencia => {
        const texto = `
            ${ocorrencia.id}
            ${ocorrencia.nome_usuario || ""}
            ${ocorrencia.bairro || ""}
            ${ocorrencia.titulo || ""}
            ${ocorrencia.descricao || ""}
        `.toLowerCase();

        const passouBusca = texto.includes(busca);

        const passouStatus =
            statusFiltro === "" ||
            normalizarStatus(ocorrencia.status) === normalizarStatus(statusFiltro);

        return passouBusca && passouStatus;
    });

    mostrarOcorrenciasAdm(filtradas);
}

function verDetalhes(id) {
    window.location.href = `ocdetalhes.html?id=${id}`;
}