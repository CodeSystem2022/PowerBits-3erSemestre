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