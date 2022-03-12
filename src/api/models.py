from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    apellido = db.Column(db.String(250), nullable=False)
    correo = db.Column(db.String(250), unique=True, nullable=False)
    contraseña = db.Column(db.Integer, nullable=False)
    telefono = db.Column(db.Integer, nullable=False )
    evaluacion = db.relationship('evaluaciones', backref='user', uselist=False)
    categorias = db.Column(db.Integer, db.ForeignKey('categorias.id'), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "correo": self.correo,
            "telefono": self.teléfono, 
        }

    def save(self):
        db.session.add(self)
        db.session.commit() 

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()

class Evaluacion(db.Model):
    __tablename__ = 'evaluaciones'
    id = db.Column(db.Integer, primary_key=True)
    fecha_evaluacion = db.Column(db.String(150), nullable=False)
    comentario = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    clientes_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    profesionales_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "fecha_evaluacion": self.fecha_evaluacion,
            "comentario": self.comentario,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()  

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()


class Rol(db.Model):
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

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()

class Categoria(db.Model):
    __tablename__ = 'categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(150), nullable=False)
    tipo_rol_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_roles": self.nombre_roles,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit()    

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()



class Portafolio(db.Model):
    __tablename__ = 'portafolios'
    id = db.Column(db.Integer, primary_key=True)
    enlace = db.Column(db.String(200), nullable=False)
    nombre_proyecto = db.Column(db.String(150), nullable=False)
    fecha_proyecto = db.Column(db.String(150), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

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

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()

class Datos_profesional(db.Model):
    __tablename__ = 'datos_profesionales'
    id = db.Column(db.Integer, primary_key=True)
    githubuser = db.Column(db.String(150), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "githubuser": self.githubuser,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit()  

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()      

class Habilidad_tecnica(db.Model):
    __tablename__ = 'habilidades_tecnicas'
    id = db.Column(db.Integer, primary_key=True)
    tecnologia = db.Column(db.String(150), nullable=False)
    nivel = db.Column(db.String(150), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "tecnologia": self.tecnologia,
            "nivel": self.nivel,
                        
        }

    def save(self):
        db.session.add(self)
        db.session.commit() 

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()       


