from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    apellido = db.Column(db.String(250), nullable=False)
    correo = db.Column(db.String(250), unique=True, nullable=False)
    contraseña = db.Column(db.Integer, unique=True, nullable=False)
    teléfono = db.Column(db.Integer, nullable=False )
    a = db.relationship('favorites_planets', backref='users.id', uselist=False) #Rol_id
    a = db.relationship('favorites_starships', backref='users.id', uselist=False) #Categoria_id
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "correo": self.correo,
            "teléfono": self.teléfono,
            
        }

    def save(self):
        db.session.add(self)
        db.session.commit()


class Roles(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    nombre_roles = db.Column(db.String(150), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_roles": self.nombre_roles,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

class Categorías(db.Model):
    __tablename__ = 'categorías'
    id = db.Column(db.Integer, primary_key=True)
    categorías = db.Column(db.String(150), nullable=False)
    #relationship tipo de rol

    def serialize(self):
        return {
            "id": self.id,
            "nombre_roles": self.nombre_roles,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit()    

class Evaluación(db.Model):
    __tablename__ = 'evaluación'
    id = db.Column(db.Integer, primary_key=True)
    fecha_evaluación = db.Column(db.String(150), nullable=False)
    comentario = db.Column(db.String(400), nullable=False)
    #id_usuariocliente
    #id_usuarioprofesional

    def serialize(self):
        return {
            "id": self.id,
            "fecha_evaluación": self.fecha_evaluación,
            "comentario": self.comentario,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()        


class Portafolio(db.Model):
    __tablename__ = 'portafolio'
    id = db.Column(db.Integer, primary_key=True)
    enlace = db.Column(db.String(200), nullable=False)
    nombre_proyecto = db.Column(db.String(150), nullable=False)
    fecha_proyecto = db.Column(db.String(150), nullable=False)
    #id usuario profesional

    def serialize(self):
        return {
            "id": self.id,
            "enlace": self.enlace,
            "nombre_proyecto": self.nombre_proyecto,
            "fecha_proyecto": self.fecha_proyecto,

        }

    def save(self):
        db.session.add(self)
        db.session.commit()

class Datos_profesionales(db.Model):
    __tablename__ = 'datos_profesionales'
    id = db.Column(db.Integer, primary_key=True)
    githubuser = db.Column(db.String(150), nullable=False)
    #usuario id

    def serialize(self):
        return {
            "id": self.id,
            "githubuser": self.githubuser,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit()        



