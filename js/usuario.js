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
        hayErrores = true;
    } else {
        // Validación del formato de Nombre (solo letras)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Nombre)) {
            console.log('Error: El formato del nombre es incorrecto');
            hayErrores = true;
        }
        
        // Validación del formato de Apellido (solo letras)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Apellido)) {
            console.log('Error: El formato del apellido es incorrecto');
            hayErrores = true;
        }
        
        // Validación de longitud del teléfono (Ajustado para que sea un error si no tiene al menos 10 dígitos)
        if (telefono.length < 10) {
            console.log("Error: El teléfono es muy corto");
            hayErrores = true;
        }
        
        // Validación del correo (debe contener @)
        if (!/@/.test(correo)) {
            console.log("Error: El correo no es válido");
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