
package enumeraciones;


public enum Continentes {
    AFRICA(53, "1.2 Billones"),
    EUROPA(46, "1.1 Billones"),
    ASIA(44, "1.9 Millones"),
    AMERICA(34, "150.2 Millones"),
    OCEANIA(14, "1.2 Billones");
 
    private final int paises;
    private String habitantes;
   
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    // metodo get
    public int getPaises() {
        return paises;
    }

    public String getHabitantes() {
        return habitantes;
    }
}
