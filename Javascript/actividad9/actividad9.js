document.getElementById("contar").onclick = function() {
    let texto = document.getElementById("texto").value;
    let cantidad = texto.length;
    let resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = "La cadena tiene " + cantidad + " caracteres";
    resultadoDiv.style.display = "block";
}

document.getElementById("volver").onclick = function() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").style.display = "none";
}