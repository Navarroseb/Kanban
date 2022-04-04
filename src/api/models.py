from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    apellido = db.Column(db.String(250), nullable=False)
    avatar = db.Column(db.String(250), nullable=False)
    correo = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    pregunta1 = db.Column(db.String(250), nullable=False)
    pregunta2 = db.Column(db.String(250), nullable=False)
    foto_carnet = db.Column(db.String(200), nullable=False)
    telefono = db.Column(db.String(50), nullable=False )
    direccion = db.Column(db.String(250), nullable=False)
    nombre_institucion = db.Column(db.String(250), nullable=False)
    titulo = db.Column(db.String(250), nullable=False)
    regiones_id = db.Column(db.Integer, db.ForeignKey('regiones.id'), nullable=True)
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=True) # cambiar mas adelante a false
    profesional = db.relationship('Profesional', backref='user', uselist=False)
    cliente = db.relationship('Cliente', backref='user', uselist=False)

    def __repr__(self):
        return '<User %r>' % self.nombre
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "avatar": self.avatar,
            "correo": self.correo,
            "password": self.password,
            "pregunta1": self.pregunta1,
            "pregunta2": self.pregunta2,
            "telefono": self.telefono,  
            "direccion": self.direccion,
            "regiones_id": self.regiones_id,
            "nombre_institucion": self.nombre_institucion,
            "titulo": self.titulo,
            "roles_id": self.roles_id,
        }
 
    def save(self):
        db.session.add(self)
        db.session.commit() 

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()

class Region(db.Model):
    __tablename__ = 'regiones'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(150), nullable=False)
    regiones_id = db.relationship('User', backref='region', uselist=True)

    def __repr__(self):
        return '<User %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "regiones_id": self.regiones_id                 
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
    nombre_rol = db.Column(db.String(150), nullable=False)
    roles_id = db.relationship('User', backref='rol', uselist=True)
        
    def __repr__(self):
        return '<Rol %r>' % self.nombre_rol

    def serialize(self):
        return {
            "id": self.id,
            "nombre_rol": self.nombre_rol,
            "roles_id": self.roles_id,                 
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
    nivel = db.Column(db.String(150), nullable=False)
    profesionales_id = db.Column(db.Integer, db.ForeignKey('profesionales.id'), nullable=True)
    habilidades_id = db.Column(db.Integer, db.ForeignKey('habilidades.id'), nullable=True)

    def __repr__(self):
        return '<Habilidad_tecnica %r>' % self.nivel

    def serialize(self):
        return {
            "id": self.id,
            "nivel": self.nivel,
            "profesionales_id": self.profesionales_id,
            "habilidades_id": self.habilidades_id,                    
        }

    def save(self):
        db.session.add(self)
        db.session.commit() 

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()   

class Habilidad(db.Model):
    __tablename__ = 'habilidades'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(150), nullable=False)
    habilidad_tecnica = db.relationship('Habilidad_tecnica', backref='habilidad', uselist=True)

    def __repr__(self):
        return '<Habilidad %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
           "habilidad_tecnica": self.habilidad_tecnica,              
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
    fecha = db.Column(db.String(150), nullable=False)
    comentario = db.Column(db.String(400), nullable=False)
    clientes_id = db.Column(db.Integer, db.ForeignKey('clientes.id'), nullable=False)
    profesionales_id = db.Column(db.Integer, db.ForeignKey('profesionales.id'), nullable=False)

    def __repr__(self):
        return '<Evaluacion %r>' % self.fecha

    def serialize(self):
        return {

            "id": self.id,
            "fecha": self.fecha,
            "comentario": self.comentario,
            "clientes_id": self.clientes_id,
            "profesionales_id": self.profesionales_id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()  

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()

class Profesional(db.Model):
    __tablename__ = 'profesionales'
    id = db.Column(db.Integer, primary_key=True)
    githubuser = db.Column(db.String(150), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    profesionales_id = db.relationship('Habilidad_tecnica', backref='profesional', uselist=True)
    #profesionales_id = db.relationship('Evaluacion', backref='profesionales', uselist=True)

    def __repr__(self):
        return '<Profesional %r>' % self.githubuser

    def serialize(self):
        return {
            "id": self.id,
            "githubuser": self.githubuser,
            "user_id": self.user_id,          
        }

    def save(self):
        db.session.add(self)
        db.session.commit()  

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()      

class Cliente(db.Model):
    __tablename__ = 'clientes'
    id = db.Column(db.Integer, primary_key=True)
    empresa = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    clientes_id = db.relationship('Evaluacion', backref='clientes', uselist=True)

    def __repr__(self):
        return '<Cliente %r>' % self.empresa

    def serialize(self):
        return {
            "id": self.id,
            "empresa": self.empresa,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.sesion.commit()

    def delete(self):    
        db.session.delete(self)
        db.sesion.commit()
