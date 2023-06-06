
class Persona:
    def __init__(self, id_persona, nombre, apellido, email):
        self._id_persona = id_persona
        self._nombre = nombre
        self._apellido = apellido
        self._email = email

    def __str__(self):
        return f'Id Persona: {self._id_persona},' \
               f'Nombre: {self._nombre},' \
               f'Apellido: {self._apellido},' \
               f'Email: {self._email}'

        # Métodos getters and setters
        @property
        def id_persona(self):
            return self._id_persona

        @id_persona.setter
        def id_persona(self,id_persona):
            self._id_persona = id_persona

        @property
        def nombre(self):
            return self._nombre

        @nombre.setter
        def id_persona(self,nombre):
            self._nombre = nombre

        @property
        def apellido(self):
            return self._apellido

        @apellido.setter
        def apellido(self,apellido):
            self._apellido = apellido

        @property
        def email(self):
            return self._email

        @email.setter
        def email(self,email):
            self._email = email

