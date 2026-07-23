console.log("hola mundo");

document.getElementById("formulariopedidos").addEventListener("submit", function(event) {
    event.preventDefault();

let nombreusuario =  document.getElementById("nombre").value;
let producto =  document.getElementById("producto").value;
let cantidad =  document.getElementById("canti").value;
let num =  document.getElementById("num").value;

ValidarDatos(nombreusuario, producto, cantidad, num);
});

function ValidarDatos(nombreusuario, producto, cantidad, pago, num){
    let hayErrores = false;

    if(nombreusuario=='' || producto==''|| cantidad=='' || num=='' ){
        console.log("por favor rellenar los campos")
        Swal.fire({
  title: "campos vacios",
  icon: "error",
  draggable: true
});
        hayErrores = true;
    }
    else {
        if (!/[a-zA-Z]/.test(nombreusuario)) {
            console.log("usuario invalido");
            Swal.fire({
  title: "usuario invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(producto)) {
            console.log('Error: El formato del nombre es incorrecto');
            Swal.fire({
  title: "nombre invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
    if (cantidad == "" || !/^\d+$/.test(cantidad)) {
        console.log("La cantidad es incorrecta");
        Swal.fire({
  title: "cantidad invalida",
  icon: "error",
  draggable: true
});
        hayErrores = true;
    }
    if (num == "" || /^\d+$/.test(num)) {
        console.log("el numero es invalido");
        Swal.fire({
  title: "numero invalido",
  icon: "error",
  draggable: true
});
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
    
}
