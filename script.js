function encriptar()
{
    var text = document.getElementById("text").value.toLowerCase();
    var txtcifrado = text.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

    document.getElementById("image-encriptado").style.display = "none";
    document.getElementById("mensaje-no-encontrado").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar()
{
    var text = document.getElementById("text").value.toLowerCase();
    var txtcifrado = text.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/imes/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");

    document.getElementById("image-encriptado").style.display = "none";
    document.getElementById("mensaje-no-encontrado").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar()
{
    var contenido = document.querySelector("#textarea2");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado");
}
