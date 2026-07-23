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
    if (nombre_producto == '' || marca_producto == '' || codigo_producto == '' || cantidad_producto == '') {
        console.log("Los campos estan vacios");
        Swal.fire({
  title: "campos vacios",
  icon: "error",
  draggable: true
});
        hayErrores = true;
    } else {
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre_producto)) {
            console.log('el nombre es incorrecto');
            Swal.fire({
  title: "nombre del producto invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
        
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(marca_producto)) {
            console.log('la marca no es valida');
            Swal.fire({
  title: "marca invalida",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
        
        if (/^\D+$/.test(codigo_producto)) {
            console.log("el codigo es incorrecto");
            Swal.fire({
  title: "codigo incorrecto",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }

        if (/^\D+$/.test(cantidad_producto)) {
            console.log("la cantidad es incorrecta");
            Swal.fire({
  title: "cantidad invalida",
  icon: "error",
  draggable: true
});
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
     

}