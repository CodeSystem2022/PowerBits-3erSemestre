class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){ //Template Literals: Nos permite insertar código dinamicamente
        return `idPrducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
} //Fin de la clase Producto

let producto1 = new Producto('Pantalon', 200)
let producto2 = new Producto('Camisa', 150)
console.log(producto1.toString())
console.log(producto2.toString())