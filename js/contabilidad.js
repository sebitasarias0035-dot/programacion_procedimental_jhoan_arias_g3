let ventas =  document.getElementById("codigo_producto").ariaValueMax;
let fecha = document.getElementById("dehoy").ariaValueMax;
let ingresos = document.getElementById("plata").ariaValueMax;
let egresos = document.getElementById("noplata").ariaValueMax;
let valor = document.getElementById("osi").ariaValueMax;
function validardatos(){
    if(ventas=='' || ingresos==''|| valor=='' ){
        console.log("por favor rellenar los campos")
    }
    else {
        if (/[a-zA-Z]/.test(ventas)) {
            console.log("ventas no puede contener letras");
        }
    }
    if (!/^\d+$/.test(ingresos)) {
        alert("Los datos son incorrectos");
    }

    if (egresos == "" || !/^\d+$/.test(egresos)) {
        alert("Los datos son incorrectos");
    }

    if (valor == "" || !/^\d+$/.test(valor)) {
        alert("Los datos son incorrectos");
    }
    }       