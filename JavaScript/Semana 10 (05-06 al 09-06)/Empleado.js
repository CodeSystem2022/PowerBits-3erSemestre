class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this_idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this.idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this.this_idEmpleado} 
        ${this._sueldo}`;
    }
    
}