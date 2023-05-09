import psycopg2 # Esto es para poder conectarnos con Postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'

)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # De esta manera ejecutamos la sentencia.
registros = cursor.fetchall() # Recuperamos todos los registros que serán una lista.
