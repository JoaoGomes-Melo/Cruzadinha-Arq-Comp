var respostas = [
    "",
    "cpu",
    "unidade de controle",
    "registradores",
    "barramento de dados",
    "cache",
    "memoria flash",
    "addres bus",
    "clock",
    "sistema operacional"
];


var classes = [
    "",
    "cpu",
    "unidade",
    "registradores",
    "barramento",
    "cache",
    "flash",
    "bus",
    "clock",
    "sistema"
];

function validar(campo, numeroPergunta) {
    var respostaUsuario = campo.value.trim().toLowerCase();
    var respostaCerta = respostas[numeroPergunta];

    if (respostaUsuario == respostaCerta) {
        pontos += 20
        mostrarLetras(classes[numeroPergunta]);
    } else {
        erros = pontos -= 10
        qtdErros++
        alert("Resposta errada!");
    }
}

function mostrarLetras(nomeClasse) {
    var letras = document.getElementsByClassName(nomeClasse);

    for (var i = 0; i < letras.length; i++) {
        letras[i].style.opacity = "1";
        letras[i].style.color = "black";
    }
}