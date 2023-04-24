// ciclo while

let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');

// do While

let conteo = 0;
do{
    console.log(conteo);
    conteo ++;
}while(conteo < 3);
console.log("Fin del ciclo Do While");

//for
for(let contando = 0; contando < 3; contando++){
    console.log(contando)
}
console.log("Fin del ciclo for");

// Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando)// Muestra todos los pares
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// La palabra continue
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
    continue; //ir a la siguiente iteración
         }
         console.log(contando);
}
console.log("Terminar ciclo"); //Termina el ciclo