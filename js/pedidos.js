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
        hayErrores = true;
    }
    else {
        if (!/[a-zA-Z]/.test(nombreusuario)) {
            console.log("usuario invalido");
            hayErrores = true;
        }
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(producto)) {
            console.log('Error: El formato del nombre es incorrecto');
            hayErrores = true;
        }
    if (cantidad == "" || !/^\d+$/.test(cantidad)) {
        console.log("La cantidad es incorrecta");
        hayErrores = true;
    }
    if (num == "" || !/^\d+$/.test(num)) {
        console.log("el numero es invalido");
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
