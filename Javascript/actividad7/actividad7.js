// Lista de equipos de fútbol por ciudad
const equipos = {
    "Almería": ["UD Almería", "AD Almería"],
    "Betis": ["Real Betis", "Betis Deportivo"],
    "Sevilla": ["Sevilla FC", "Real Betis (histórico)"],
    "Granada": ["Granada CF", "Recreativo Granada"],
    "Málaga": ["Málaga CF", "CD Málaga"],
    "Roquetas": ["CD Roquetas", "Roquetas CF"],
    "Vícar": ["CD Vícar", "Vícar CF"],
    "El Ejido": ["CD El Ejido", "Poli Ejido"],
    "Adra": ["CD Adra", "Adra CF"]
};

document.getElementById("mostrar").onclick = function() {
    let nombre = document.getElementById("nombre").value;
    let pueblo = document.getElementById("pueblo").value;
    let resultadoDiv = document.getElementById("resultado");

    let equiposNombre = equipos[nombre] || [];
    let equiposPueblo = equipos[pueblo] || [];

    let texto = "<strong>🏆 Clasificación y listado de equipos:</strong><br><br>";
    texto += "<strong>Nombre seleccionado (" + nombre + "):</strong><br>";
    if (equiposNombre.length > 0) {
        texto += equiposNombre.join("<br>");
    } else {
        texto += "No hay equipos registrados.";
    }

    texto += "<br><br><strong>Pueblo seleccionado (" + pueblo + "):</strong><br>";
    if (equiposPueblo.length > 0) {
        texto += equiposPueblo.join("<br>");
    } else {
        texto += "No hay equipos registrados.";
    }

    resultadoDiv.innerHTML = texto;
    resultadoDiv.style.display = "block";
};

document.getElementById("volver").onclick = function() {
    document.getElementById("nombre").value = "Almería";
    document.getElementById("pueblo").value = "Roquetas";
    document.getElementById("resultado").style.display = "none";
};