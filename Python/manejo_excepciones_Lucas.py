from Numeros_iguales_Excepcion import NumerosIgualesExcepcion


# una excepcion es cuando el programa larga un error abrupto

# para trabajar con una excepcion de dividir por 0, tenemos que encerrar el codigo en un bloque try - except
# conviene trabajar con exceptiones mas generales como exception y no ZeroDivisionError, que esta es mas especifica
# con la clase Exception podemos poner un string con un int que no se va a detener el programa, salta error pero no se detiene
resultado = None

# estas variables pueden ir dentro del bloque try y van a ser exclusivas del bloque, pero es mejor hacer variables globales
# a = 10
# b = 0

try:
    a = int(input("Digite el 1er numero: "))
    b = int(input("Digite el 2do numero: "))
    if a == b:  # si son iguales
        # arrojamos una exception son la palabra RAISE
        raise NumerosIgualesExcepcion("Son iguales")  # llamamos a la clase que creamos y mostamos el mensaje
    resultado = a / b

# podemos ser un poco mas especifico, y si no es de este tipo de error salta al otro generico Exception

# CLASE HIJA
except TypeError as e:
    print(f"Ocurrio un error: {e}")

# CLASE HIJA
except ZeroDivisionError as e:
    print(f"Ocurrio un error: {e}")

# CLASE PADRE - esta debe ir al final
except Exception as e:  # aca nombramos a la excepcion que es por dividir por 0, y la renombramos con otro nombre
    print(f"Ocurrio un error: {e}") # y luego imprimos un mensaje que diga el error

# bloque else, se ejecuta solamente si no se ha lanzado una excepcion
else:
    print('No se arrojo ninguna excepcion')

# bloque finally, siempre se va a ejecutar
finally:
    print('Ejecucion del bloque finally')

print(f"El resultado es: {resultado}")  # lo que pasa aca es que al entrar al bloque try-except la variable
                                        # resultado no sufre modificaciones entonces imprime None

print("seguimos...")
