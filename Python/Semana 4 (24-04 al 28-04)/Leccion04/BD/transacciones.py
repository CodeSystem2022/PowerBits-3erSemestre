import psycopg2 as bd # Esto es para poder conectarnos con Postgre

conexion = bd.connect( user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparzaœmail.com')
    cursor.execute(sentencia, valores)
    conexion.commit()  # Realizamos el commit manualmente
    print('Termina la transaccion')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()