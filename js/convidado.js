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

    document.getElementById("nome").innerText = convite.nomeConvite;

    document.getElementById("autorizados").innerHTML = `
        <strong>Convidados vinculados a este convite:</strong><br><br>
        ${convite.convidados.join("<br>")}<br><br>
        <strong>Quantidade autorizada:</strong> ${convite.quantidade}
    `;

}

carregarConvite();
