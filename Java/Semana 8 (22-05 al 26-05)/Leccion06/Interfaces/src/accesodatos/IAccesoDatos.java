package accesodatos;

public interface IAccesoDatos {
    int MAX_REGISTROS = 10;
    
    //Metodo insertar es absctracto y si cuerpo
    void insertar();
     
    void listar();
    
    void actualizar();
    
    void eliminar();
    
}
