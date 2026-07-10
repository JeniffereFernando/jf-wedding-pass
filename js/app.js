document.addEventListener("DOMContentLoaded", () => {

    // Aplica animação de entrada ao conteúdo principal
    const container = document.querySelector(".container");

    if (container) {
        container.classList.add("fade");
    }

    // Configuração do botão principal
    const botao = document.querySelector("button");

    if (botao) {

        botao.addEventListener("click", () => {

            botao.disabled = true;
            botao.innerText = "Preparando sua experiência...";

            setTimeout(() => {

                window.location.href = "convidado.html";

            }, 1800);

        });

    }

});
