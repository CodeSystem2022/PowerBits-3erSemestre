package ar.com.system2023.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[]; //Arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;
    
    //COnstructor vacio
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    //Metodo para agregar una nueva computadora al arreglo
    public void agregar_computadora(Computadora computadora){
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadora++] = computadora; 
        }
        else{
            System.out.println("Has superdado el limite: "+Orden.MAX_COMPUTADORAS);
        }
    }
    
    //Mostrar orden
    public void mostrar_orden(){
        System.out.println("Orden #: "+this.idOrden);
        System.out.println("Computadora de la orden #: "+this.idOrden);
        for(int i = 0; i < this.contadorComputadora; i++){
            System.out.println(this.computadora[i]);
        }
    }
}

   
