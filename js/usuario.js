console.log("hola mundo");

// Se captura el evento 'submit' (cuando se envía el formulario)
document.getElementById("formularioUsuario").addEventListener("submit", function(event) {
    // Evita que la página se recargue automáticamente al dar clic en Enviar
    event.preventDefault();

    // Captura de datos del formulario AHORA (cuando el usuario ya escribió)
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let Tipo_documento = document.getElementById("Tipo_documento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let contraseña = document.getElementById("contraseña").value;

    ValidarDatos(Nombre, Apellido, telefono, correo);
});

// Función que ejecuta la lógica de validación
function ValidarDatos(Nombre, Apellido, telefono, correo) {
    let hayErrores = false;

    // Validación de campos vacíos
    if (Nombre === '' || Apellido === '' || telefono === '' || correo === '') {
        console.log("Error: Los campos obligatorios están vacíos");
        Swal.fire({
  title: "rellena los campos",
  icon: "error",
  draggable: true
});
        hayErrores = true;
    } else {

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Nombre)) {
            console.log('Error: El formato del nombre es incorrecto');
            Swal.fire({
  title: "nombre invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Apellido)) {
            console.log('Error: El formato del apellido es incorrecto');
            Swal.fire({
  title: "apellido invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
        
        if (telefono.length < 10) {
            console.log("Error: El teléfono es muy corto");Swal.fire({
  title: "numero invalido",
  icon: "error",
  draggable: true
});
            hayErrores = true;
        }
        if (!/@/.test(correo)) {
            console.log("Error: El correo no es válido");
            Swal.fire({
  title: "correo invalido",
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