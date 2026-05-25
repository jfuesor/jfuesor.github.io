let encendida = false;

function cambiarEstado() {
    let bombilla = document.getElementById("bombilla");
    let boton = document.getElementById("btn");

    if (encendida) {

        bombilla.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        boton.innerHTML = "Encender";
        encendida = false;
    } else {

        bombilla.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        boton.innerHTML = "Apagar";
        encendida = true;
    }
}