function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    if (numero < 1 || numero > 30) {
        resultado.innerHTML = "Por favor, introduce un número entre 1 y 30.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.innerHTML = "El número " + numero + " es divisible por 2.";
    } else {
        resultado.innerHTML = "El número " + numero + " NO es divisible por 2.";
    }
}