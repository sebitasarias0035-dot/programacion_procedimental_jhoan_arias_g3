console.log("HOLA MUNDO");

//digitalizacion
function arearectangulo(lado, alto) {
    return lado*alto;
}
    console.log(arearectangulo(2, 3))


//videojuegos
function Promedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  
  return suma / numeros.length;
}

console.log(Promedio([3, 3, 2]));


//programacion
function parimpar(numero){
    if (numero % 2 === 0) {
        return "par"
    }else { return "impar"}
}

console.log(parimpar(8))

//robotica
function lista(Nombres) {
    Nombres.forEach(function(nombre) {
    console.log(nombre);
  });
}

const nombres = ["Ana", "Carlos", "juan", "pedro"];
lista(nombres);

//ingenieria
function mostrarUsuario(usuario) {
  console.log("datos:");
  for (let propiedad in usuario) {
    console.log(`${propiedad}: ${usuario[propiedad]}`);
  }
}

const miUsuario = {
  nombre: "Ana",edad: 28, nacimiento: 29_02_05};

mostrarUsuario(miUsuario);