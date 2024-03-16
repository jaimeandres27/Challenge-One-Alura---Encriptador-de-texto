function encriptar(){
   let texto = document.getElementById("texto") .value;
   let tituloMensaje = document.getElementById("titulo-mensaje")
   let parrafo = document.getElementById("parrafo")
   let muñeco = document.getElementById ("muñeco")
   let resultado = document. getElementById ("resultado") .value
   let vacio = "";
   let copiaraparecer = document.getElementById ("copiar")
   let resultadoaparecer= document.getElementById("resultado")

   let textoCifrado = texto

    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto") .value = textoCifrado;
    tituloMensaje.textContent = "Su texto fue encriptado con exito";
    parrafo.textContent = "";
    document. getElementById ("resultado") .value = textoCifrado ;
    muñeco.remove();
    copiaraparecer.style.visibility= "inherit";
    resultadoaparecer.style.visibility="inherit";
  } else if (texto==vacio){
  alert("ingrese un mensaje para encriptar o desencriptar");
  return true }
  else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";   
  } 
}

function desencriptar(){
    let texto = document .getElementById("texto") .value;
    let tituloMensaje= document. getElementById ("titulo-mensaje")
    let parrafo = document.getElementById("parrafo")
    let copiaraparecer = document.getElementById ("copiar")
    let resultado = document. getElementById ("resultado") .value
    let resultadoaparecer= document.getElementById("resultado")
    
    let textoCifrado= texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u")

     if (texto.length != 0) {
        document.getElementById("texto") .value = textoCifrado;
        tituloMensaje.textContent= "su texto fue desencriptado con exito"
        parrafo.textContent = ""
        document. getElementById ("resultado") .value = textoCifrado
        muñeco.remove();
        copiaraparecer.style.visibility= "inherit";
        resultadoaparecer.style.visibility="inherit";
  }  else if (texto==vacio){
    alert("ingrese un mensaje para encriptar o desencriptar");
    return true }
    else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
     }
}

 async function copiar() {
  
    var content = document.getElementById('resultado');

  content.select(resultado);
  document.execCommand('copy');

  alert('Copiado!', "su texto fue copiado correctamente");
 }

