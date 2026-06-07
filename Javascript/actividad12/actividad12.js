// Las recetas
const recetas = [
    { id: 1, nombre: "Salmorejo", ingredientes: "tomate, aceite, pan" },
    { id: 2, nombre: "Gachas", ingredientes: "harina, agua, azúcar" },
    { id: 3, nombre: "Migas", ingredientes: "pan, ajo, aceite" }
];

// Botón Mostrar recetas
document.getElementById("mostrar").onclick = function() {
    let tbody = document.getElementById("cuerpoTabla");
    tbody.innerHTML = ""; // Limpiar tabla
    
    // Poner las recetas en la tabla
    for (let i = 0; i < recetas.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell(0).innerHTML = recetas[i].id;
        fila.insertCell(1).innerHTML = recetas[i].nombre;
        fila.insertCell(2).innerHTML = recetas[i].ingredientes;
    }
    
    // Mostrar la tabla
    document.getElementById("contenedorTabla").style.display = "block";
}

// Botón Volver al menú
document.getElementById("volver").onclick = function() {
    // Ocultar la tabla
    document.getElementById("contenedorTabla").style.display = "none";
}