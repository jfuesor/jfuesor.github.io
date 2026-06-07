// Botón Enviar
document.getElementById("enviar").onclick = function() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    
    if (numero == "1") {
        resultado.innerHTML = "Primavera";
        resultado.style.display = "block";
    }
    else if (numero == "2") {
        resultado.innerHTML = "Verano";
        resultado.style.display = "block";
    }
    else if (numero == "3") {
        resultado.innerHTML = "Otoño";
        resultado.style.display = "block";
    }
    else if (numero == "4") {
        resultado.innerHTML = "Invierno";
        resultado.style.display = "block";
    }
    else {
        resultado.innerHTML = "Número inválido. Debe ser 1, 2, 3 o 4";
        resultado.style.display = "block";
    }
}

// Botón Volver
document.getElementById("volver").onclick = function() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").style.display = "none";
}