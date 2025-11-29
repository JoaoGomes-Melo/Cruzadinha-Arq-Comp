var respostas = [
    "",
    "cpu",
    "ula",
    "registradores",
    "eprom",
    "ram",
    "rom", 
    "flash",
    "memoria de massa",
    "dma",
    "chip select",
    "address bus",
    "data bus", 
    "threads",
    "nucleo"

];


var classes = [
    "",
    "cpu",
    "ula",
    "registradores",
    "eprom",
    "ram",
    "rom",
    "flash",
    "massa",
    "dma",
    "chip",
    "bus",
    "data",
    "threads",
    "nucleo"


];

function validar(campo, numeroPergunta) {
    var respostaUsuario = campo.value.trim().toLowerCase();
    var respostaCerta = respostas[numeroPergunta];

    if (respostaUsuario == respostaCerta) {
        mostrarLetras(classes[numeroPergunta]);
    } else {
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