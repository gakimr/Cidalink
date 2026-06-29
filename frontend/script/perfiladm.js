document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(
        sessionStorage.getItem("usuarioLogado")
    );

    console.log("Usuário carregado:", usuario);

    if (!usuario) {
        alert("Usuário não encontrado!");
        return;
    }

    // Preenche os campos
    document.getElementById("nome").value =
        usuario.name || "";

    document.getElementById("email").value =
        usuario.email || "";

    // Carrega a foto salva
    if (usuario.fotoPerfil) {

        document.getElementById("fotoPerfilPreview").src =
            `http://localhost:3000/uploads/${usuario.fotoPerfil}`;

    }

    // Preview da foto antes de salvar
    const inputFoto =
        document.getElementById("fotoPerfil");

    if (inputFoto) {

        inputFoto.addEventListener("change", function () {

            const arquivo = this.files[0];

            if (arquivo) {

                document.getElementById(
                    "fotoPerfilPreview"
                ).src = URL.createObjectURL(arquivo);

            }
        });
    }
});

// Habilita edição
function habilitarEdicao() {

    document.getElementById("nome").disabled = false;

    document.getElementById("email").disabled = false;

    const nivelAcesso =
        document.getElementById("nivelAcesso");

    if (nivelAcesso) {
        nivelAcesso.disabled = false;
    }
}

// Salva alterações
async function editarPerfil() {

    try {

        const usuario = JSON.parse(
            sessionStorage.getItem("usuarioLogado")
        );

        if (!usuario) {
            alert("Usuário não encontrado.");
            return;
        }

        const formData = new FormData();

        formData.append("id", usuario.id);

        formData.append(
            "name",
            document.getElementById("nome").value
        );

        formData.append(
            "email",
            document.getElementById("email").value
        );

        const foto =
            document.getElementById("fotoPerfil").files[0];

        if (foto) {
            formData.append(
                "uploadFoto",
                foto
            );
        }

        const response = await fetch(
            "http://localhost:3000/profile/update",
            {
                method: "PUT",
                body: formData
            }
        );

        const data = await response.json();

        console.log("Retorno da API:", data);

        if (response.ok) {

            document.getElementById("nome").disabled = true;

            document.getElementById("email").disabled = true;

            const nivelAcesso =
                document.getElementById("nivelAcesso");

            if (nivelAcesso) {
                nivelAcesso.disabled = true;
            }

            // Atualiza a sessão
            if (data.data) {

                const usuarioAtualizado = {
                    ...usuario,
                    ...data.data
                };

                sessionStorage.setItem(
                    "usuarioLogado",
                    JSON.stringify(usuarioAtualizado)
                );

                console.log(
                    "Sessão atualizada:",
                    usuarioAtualizado
                );

                // Atualiza a foto
                if (usuarioAtualizado.fotoPerfil) {

                    document.getElementById(
                        "fotoPerfilPreview"
                    ).src =
                    `http://localhost:3000/uploads/${usuarioAtualizado.fotoPerfil}`;
                }
            }

            alert("Perfil atualizado com sucesso!");

        } else {

            alert(
                data.data ||
                "Erro ao atualizar perfil."
            );

            console.log(data);
        }

    } catch (erro) {

        console.error(
            "Erro ao atualizar perfil:",
            erro
        );

        alert(
            "Erro ao atualizar perfil."
        );
    }
}