Nico Machuca

from NumerosIgualesException import NumerosIgualesException
resultado = None

try:
    a = int(input('Dígite un valor para a: '))
    b = int(input('Dígite un valor para b: '))
    if a ==b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b  # modificamos
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {e}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {e}')
else:
    print("No se arrojó ninguna excepción")
finally:  # Siempre se va a ejecutar
    print("Ejecución de este bloque finally")

print(f'El resultado es: {resultado}')
print('seguimos...')
