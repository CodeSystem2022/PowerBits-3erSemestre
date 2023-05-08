let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //método o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    }
}

console.log('Nombre: '+persona.nombre);
console.log('Apellido: '+persona.apellido);
console.log('Su email es: '+persona.email);
console.log('De la edad de '+persona.edad +' años');
console.log(persona.nombreCompleto());

let persona2 = new Object();//Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "45134234512";
console.log(persona2.telefono);

console.log(persona['apellido']); //Accedemos como si fuera un arreglo

//for in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}

persona.apellida = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

