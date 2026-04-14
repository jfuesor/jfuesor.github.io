function cambiarH1() {
    let h1 = document.getElementById("titulo");
    h1.innerHTML = "DOM Manipulado";
    h1.style.color = "red";
    h1.classList.add("titulo-activo");
}

function cambiarParrafo() {
    let p = document.getElementById("parrafo");
    p.innerHTML += " <strong>Texto añadido en negrita</strong>";
}

function cambiarCeldas() {
    document.getElementById("c1").innerHTML = "Nueva Celda 1";
    document.getElementById("c2").innerHTML = "Nueva Celda 2";
}

function anadirCelda() {
    let fila = document.getElementById("fila");
    let nuevaCelda = document.createElement("td");
    nuevaCelda.innerHTML = "Celda Nueva";

    fila.appendChild(nuevaCelda);

    nuevaCelda.addEventListener("click", function() {
        this.style.backgroundColor = "yellow";
    });
}

function colorCeldas() {
    document.getElementById("c1").style.backgroundColor = "blue";
    document.getElementById("c2").style.backgroundColor = "green";
}

document.getElementById("c1").addEventListener("click", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("c2").addEventListener("click", function() {
    this.style.backgroundColor = "yellow";
});