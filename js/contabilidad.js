console.log("hola mundo");

document.getElementById("formulariocontabilidad").addEventListener("submit", function(event) {
    event.preventDefault();

let ventas =  document.getElementById("codigo_producto").value;
let fecha = document.getElementById("dehoy").value;
let ingresos = document.getElementById("plata").value;
let egresos = document.getElementById("noplata").value;
let valor = document.getElementById("osi").value;

ValidarDatos(ventas, ingresos, egresos, valor);
});

function ValidarDatos(ventas, ingresos, egresos, valor){
    let hayErrores = false;

    if(ventas=='' || ingresos==''|| valor=='' ){
        console.log("por favor rellenar los campos")
        hayErrores = true;
    }
    else {
        if (/[a-zA-Z]/.test(ventas)) {
            console.log("ventas no puede contener letras");
            hayErrores = true;
        }
    }
    if (!/^\d+$/.test(ingresos)) {
        console.log("Los datos son incorrectos");
        hayErrores = true;
    }

    if (egresos == "" || !/^\d+$/.test(egresos)) {
        console.log("Los datos son incorrectos");
        hayErrores = true;
    }

    if (valor == "" || !/^\d+$/.test(valor)) {
        console.log("Los datos son incorrectos");
        hayErrores = true;
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