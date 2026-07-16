console.log("hola mundo");

document.getElementById("formularioinventario").addEventListener("submit", function(event) {
    event.preventDefault();

let nombre_producto = document.getElementById("nombre_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
let codigo_producto = document.getElementById("codigo_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;

ValidarDatos(nombre_producto, marca_producto, codigo_producto, cantidad_producto);
});

function ValidarDatos( nombre_producto, marca_producto, codigo_producto, cantidad_producto) {
    let hayErrores = false;
    // Validación de campos vacíos
    if (nombre_producto == '' || marca_producto == '' || codigo_producto == '' || cantidad_producto == '') {
        console.log("Los campos estan vacios");
        hayErrores = true;
    } else {
        // Validación del formato de Nombre (solo letras)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre_producto)) {
            console.log('el nombre es incorrecto');
            hayErrores = true;
        }
        
        // Validación del formato de Apellido (solo letras)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(marca_producto)) {
            console.log('la marca no es valida');
            hayErrores = true;
        }
        
        // Validación de longitud del documento
        if (/^\D+$/.test(codigo_producto)) {
            console.log("el codigo es incorrecto");
            hayErrores = true;
        }

        // Validación de longitud del teléfono
        if (/^\D+$/.test(cantidad_producto)) {
            console.log("la cantidad es incorrecta");
            hayErrores = true;
        }
    }
    if (!hayErrores) {
        console.log("¡Validación exitosa! Datos correctos.");
        Swal.fire({
  title: "realmente lo hiciste",
  icon: "success",
  draggable: true
});
   setTimeout(function() {
    window.location.href = "index.html";
}, 2000);
         
    }
     if (hayErrores) {
        console.log("datos incorrectos.");
        Swal.fire({
  title: "tequivocaste",
  icon: "error",
  draggable: true
});
       
    }

}