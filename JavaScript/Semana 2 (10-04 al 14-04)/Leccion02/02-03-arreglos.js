// let autos = new Array('Ferrari', 'Renault', 'BMW'); // Esta es la sintaxis vieja
const autos =['Ferrari', 'Renault', 'BMW'];
console.log(autos);

// Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i ++){
    console.log(i+' : '+autos[i]);
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

// Agregamos nuevos valores al arreglo
autos.push('Audi'); // Agregamos el elemento al final del arreglo
console.log(autos);

// Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porsche'
console.log(autos);

// Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = 'Renault';
console.log(autos);