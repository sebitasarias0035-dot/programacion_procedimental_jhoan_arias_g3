let nombre_producto = document.getElementsByName("nombre_producto").value;
let marca_producto = document.getElementsByName("marca_producto").value;
let codigo_producto = document.getElementById("codigo_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;

function ValidarDatos() {
    // Validación de campos vacíos
    if (nombre_producto == '' || marca_producto == '' || codigo_producto == '' || cantidad_producto == '') {
        console.log("Los campos estan vacios");
    } else {
        // Validación del formato de Nombre (solo letras)
        if (!/^[a-zA-Z]+$/.test(nombre_producto)) {
            console.log('Los datos son incorrectos');
        }
        
        // Validación del formato de Apellido (solo letras)
        if (!/^[a-zA-Z]+$/.test(marca_producto)) {
            console.log('Los datos son incorrectos');
        }
        
        // Validación de longitud del documento
        if (codigo_producto.length >= 10) {
            console.log("Los datos son incorrectos");
        }

        // Validación de longitud del teléfono
        if (cantidad_producto.length >= 10) {
            console.log("Los datos son incorrectos");
        }
    }
}