resultado = None
a = 7
b = 0
try:  
    resultado = a / b #modificamos

except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'Ocurrio un error: {e}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos...')
