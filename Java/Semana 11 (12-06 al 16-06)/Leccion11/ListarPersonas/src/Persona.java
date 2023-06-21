public class Persona {
    private String nombre;
    private String tel;
    private String email;
    private static int numeroPersonas = 0;

    // Constructor vacio
    public Persona(){
        this.id = ++Persona.numeroPersonas;
    }
}
