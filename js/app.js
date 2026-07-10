document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("btnEntrar");

    if (botao) {

        botao.addEventListener("click", () => {

            window.location.href = "convidado.html?codigo=JF-001";

        });

    }

});
