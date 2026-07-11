async function carregarConvite() {

    const resposta = await fetch("dados/convidados.json");
    const convidados = await resposta.json();

    const parametros = new URLSearchParams(window.location.search);

// Lê o código da URL e remove espaços em branco
const codigo = (parametros.get("codigo") || "").trim();

console.log("Código recebido:", codigo);
console.log("Existe no JSON?", convidados[codigo]);
console.log("Chaves do JSON:", Object.keys(convidados));

    if (!codigo || !convidados[codigo]) {

        document.getElementById("nome").innerText = "Convite não encontrado";

        document.getElementById("status").innerHTML =
            "<strong>Status:</strong> Inválido";

        document.getElementById("autorizados").innerHTML =
            "Verifique o QR Code ou entre em contato com os noivos.";

        document.getElementById("mensagem").innerHTML = "";

        return;
    }

    const convite = convidados[codigo];

document.getElementById("nome").innerText = convite.nomeConvite;

document.getElementById("status").innerHTML =
    convite.status === "confirmado"
        ? "🟢 CONFIRMADO"
        : "🔴 CANCELADO";

document.getElementById("autorizados").innerHTML =
    convite.convidados.join("<br>");

document.getElementById("quantidade").innerText =
    convite.quantidade;

document.getElementById("codigo").innerText =
    convite.codigo;

    document.getElementById("qrcode").src =
    `qrcodes/${convite.codigo}.png`;

document.getElementById("mensagem").innerText =
    convite.mensagem;
}

carregarConvite();
