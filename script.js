// Variable para almacenar el texto original
var originalText = "";

// Función para encriptar o desencriptar el texto
function convert(action) {
  var inputText = "";

  if (action === "encrypt") {
    // Si la acción es "encriptar", se obtiene el texto de la primera caja de texto
    inputText = document.getElementById("inputText").value;
    // Se almacena el texto original antes de encriptar
    originalText = inputText;
    // Se vacía la primera caja de texto
    document.getElementById("inputText").value = "";
  } else if (action === "decrypt") {
    // Si la acción es "desencriptar", se obtiene el texto de la segunda caja de texto
    inputText = document.getElementById("outputText").value;
  }

  // Verificar si hay letras mayúsculas en el texto
  if (/[A-Z]/.test(inputText)) {
    alert("Por favor, ingrese solo letras en minúsculas.");
    return;
  }

  // Convertir texto a minúsculas
  inputText = inputText.toLowerCase();

  // Verificar que la entrada solo contenga letras minúsculas y espacios
  if (!/^[a-z\s]+$/.test(inputText)) {
    alert("Por favor, ingrese solo letras en minúsculas del alfabeto y espacios.");
    return;
  }

  var outputText = "";

  if (action === "encrypt") {
    // Si la acción es "encriptar", se llama a la función "encrypt" con el texto de entrada
    outputText = encrypt(inputText);
  } else if (action === "decrypt") {
    // Si la acción es "desencriptar", se llama a la función "decrypt" con el texto de entrada
    outputText = decrypt(inputText);
  }

  if (action === "encrypt") {
    // Si la acción es "encriptar", se coloca el texto encriptado en la segunda caja de texto
    document.getElementById("outputText").value = outputText;
  } else if (action === "decrypt") {
    // Si la acción es "desencriptar", se coloca el texto desencriptado en la primera caja de texto
    document.getElementById("inputText").value = outputText;
    // Se vacía la segunda caja de texto
    document.getElementById("outputText").value = "";
  }
}

function encrypt(text) {
  return text.replace(/e/g, "enter")
             .replace(/i/g, "imes")
             .replace(/a/g, "ai")
             .replace(/o/g, "ober")
             .replace(/u/g, "ufat");
}

function decrypt(text) {
  return text.replace(/enter/g, "e")
             .replace(/imes/g, "i")
             .replace(/ai/g, "a")
             .replace(/ober/g, "o")
             .replace(/ufat/g, "u");
}

function copyToClipboard() {
  var outputText = document.getElementById("outputText").value;
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", outputText);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Texto copiado al portapapeles: " + outputText);
}

function refreshPage() {
  location.reload();
}

// Obtener la fecha actual
var fechaActual = new Date();

// Formatear la fecha en formato legible
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);

// Mostrar la fecha en la página
document.getElementById("fecha-creacion").textContent = fechaFormateada;
