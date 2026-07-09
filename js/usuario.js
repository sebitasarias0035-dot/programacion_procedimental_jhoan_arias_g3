console.log("hola mundo");

// Captura de datos del formulario
let Nombre = document.getElementsByName("Nombre").value;
let Apellido = document.getElementsByName("Apellido").value;
let Tipo_documento = document.getElementById("Tipo_documento").value;
let numero_documento = document.getElementById("numero_documento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let genero = document.getElementsByName("genero").value;
let cargo = document.getElementsByName("cargo").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarDatos() {
    // Validación de campos vacíos
    if (Nombre == '' || Apellido == '' || numero_documento == '' || telefono == '' || correo == '') {
        console.log("Los campos estan vacios");
    } else {
        // Validación del formato de Nombre (solo letras)
        if (!/^[a-zA-Z]+$/.test(Nombre)) {
            console.log('Los datos son incorrectos');
        }
        
        // Validación del formato de Apellido (solo letras)
        if (!/^[a-zA-Z]+$/.test(Apellido)) {
            console.log('Los datos son incorrectos');
        }
        
        // Validación de longitud del documento
        if (numero_documento.length >= 10) {
            console.log("Los datos son incorrectos");
        }
        
        // Validación de longitud del teléfono
        if (telefono.length >= 10) {
            console.log("Los datos son incorrectos");
        }
        
        // Validación del correo (debe contener @)
        if (!/@/.test(correo)) {
            console.log("Los datos son incorrectos");
        }
    }
}