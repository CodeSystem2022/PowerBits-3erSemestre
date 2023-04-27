package domain;

public class Persona {
    private final int idPersonas;
  private static int contadorPersonas;
  
  static{  //Bloque de inicializacion estatico
      System.out.println("Ejecucion del bloque estaico");
      ++Persona.contadorPersonas;
      //idPersonas = 10; Solo se pueden inicializar atributos estaticos
  }
  
  {     //Bloque de inicializacion NO estatico(contexto dinanmico)
      System.out.println("Ejecucuion del bloque no estatico");
      this.idPersonas = Persona.contadorPersonas++;  //Incrementamos el atributo
  }
  
  //Los bloques de inicializacion se ejecutan antes del constructor
  public Persona(){
      System.out.println("Ejecucion del constructor");
}
  
  public int getIdPerosnas(){
      return this.idPersonas;
  }

    @Override
    public String toString() {
        return "Persona{" + "idPersonas=" + idPersonas + '}';
    }
}
