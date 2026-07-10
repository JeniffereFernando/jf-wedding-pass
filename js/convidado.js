async function carregarConvite() {

    const resposta = await fetch("dados/convidados.json");
    const convidados = await resposta.json();

    const parametros = new URLSearchParams(window.location.search);

    const codigo = parametros.get("codigo");

    if (!codigo || !convidados[codigo]) {

        document.getElementById("nome").innerText = "Convite não encontrado";

        document.getElementById("autorizados").innerText =
            "Verifique o QR Code ou entre em contato com os noivos.";

        return;

    }

    const convite = convidados[codigo];

    document.getElementById("nome").innerText = convite.nome;

    document.getElementById("autorizados").innerHTML =
        convite.autorizados.join("<br>");

}

carregarConvite();
