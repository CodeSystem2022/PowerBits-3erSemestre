miFuncion(8, 2); //Esto se le conoce como hoisting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}

//Llamando la función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramaos una funcion de tipo expresion o funcion anonima
let x = function(a, b){return a + b}; //necesita cierra con punto y coma
resultado = x (5, 6);// al llamarla se pone la variable y parentesis
console.log(resultado);

// Funciones de tipo self e invoking
(function(a, b){
    console.log('Ejecutando la función: '+ (a + b));
})(9, 6); 

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length); 4
}

miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto); 

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);  //Asignamos el valor a una variable
console.log(resultado);

// Funcion de tipo expresion
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);  // muestra el parametro de: a
    console.log(arguments[1]);  // muestra el parametro de: b
    
    return a + b + arguments[2];
}
resultado = sumar(3,2,9);
console.log(resultado);