async function carregarConvite() {

    const resposta = await fetch("dados/convidados.json");
    const convidados = await resposta.json();

    const codigo = "JF-001";

    const convite = convidados[codigo];

    document.getElementById("nome").innerText = convite.nome;

    document.getElementById("autorizados").innerHTML =
        convite.autorizados.join("<br>");

}

carregarConvite();
