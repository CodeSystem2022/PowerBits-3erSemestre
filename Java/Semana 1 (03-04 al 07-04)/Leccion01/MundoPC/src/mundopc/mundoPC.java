package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); // Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        // Creamos objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32); // Importar la clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); // Inicializamos el arreglo vacío
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden 2 
        orden1.agregar_computadora(computadoraHP);
        orden1.agregar_computadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora("Computadoras de diferentes marcas: ", monitorHP, tecladoGamer, ratonHP);
        orden2.agregar_computadora(computadorasVarias);
        
        orden1.mostrar_orden();
        orden2.mostrar_orden();
    }
}