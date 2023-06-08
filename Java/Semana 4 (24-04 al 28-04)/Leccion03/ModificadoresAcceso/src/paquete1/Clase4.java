package paquete2;

public class Clase4 {
    private String atributoPrivate = "atributo Privado" ;
    
    private Clases4(){
        System.out.println("Contructor privado");
    }
    //Creamos un constructor public para poder crear objetos
    public Clases4 (String argumento){ //Aqui se puede llamar al contructor vacio
        this() ;
        System.out.println("Constructor publico");
    }
    
    //Método private
    private void metodoPrivado(){
        System.out.println("Método privado");
    }
    
    public String getAtributoPrivate(){
        return atributoPrivate;
    }
    
    public void setAtributoPrivate (String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}