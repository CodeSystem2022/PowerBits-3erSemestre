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
