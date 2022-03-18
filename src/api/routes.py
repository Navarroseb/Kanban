from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Region, Rol, Habilidad_tecnica, Habilidad, Evaluacion, Profesional, Cliente
import cloudinary.uploader
import datetime


api = Blueprint('api', __name__)

@api.route('/Registro', methods=['POST'])
def registro():
    if id is not none:
        user = User.query.get(id)
        if not user: return jsonify({"Error": "usuario no encontrado"}), 404
        return jsonify(registro.serialize()), 200

    if request.method == 'POST':
       
        nombre = request.form['nombre'],
        apellido = request.form['apellido'],
        avatar = request.files['avatar'],
        correo = request.form['correo'],
        password = request.form['password'],
        foto_carnet = request.files['foto_carnet'],
        telefono = request.form['telefono'],
        direccion = request.form['direccion'],
        nombre_institucion = request.form['nombre_institucion'],
        titulo = request.form['titulo'],
        githubuser = request.form['githubuser'],
        empresa = request.form['empresa']

        print(registro)

        
        user = User.query.filter_by(nombre = nombre).all()

        if not nombre: return jsonify({ "Error": "El nombre sera requerido!"}), 400
        if not apellido: return jsonify({ "Error": "El apellido sera requerido!"}), 400
        if not avatar: return jsonify({ "Error": "El avatar no esta disponible!"}), 400
        if not correo: return jsonify({ "Error": "El correo sera requerido!"}), 400
        if not password: return jsonify({ "Error": "La contraseña sera requerida!"}), 400
        if not telefono: return jsonify({ "Error": "El telefono sera requerido!"}), 400
        if not direccion: return jsonify({ "Error": "La direccion sera requerida!"}), 400
        if not githubuser: return jsonify({ "Error": "El usuario de github sera requerido!"}), 400
        if not empresa: return jsonify({ "msg": "El nombre de la empresa sera requerida!"}), 400
        
        upload_avatar = cloudinary.uploader.upload(avatar,
        folder="avatar",
        public_id=nombre+"_"+avatar.filename,
        overwrite=True,
        resource_type="image"
        )

        upload_foto_carnet = cloudinary.uploader.upload(foto_carnet,
        folder="foto_carnet",
        public_id=nombre+"_"+foto_carnet.filename,
        overwrite=True,
        resource_type="image"
        )

        user = User()
        user.nombre = nombre
        user.apellido = apellido
        user.avatar = upload['secure_url']
        user.correo = correo
        user.password = generate_password_hash(password)
        user.foto_carnet = upload['secure_url']
        user.telefono = telefono
        user.direccion = direccion
        user.nombre_institucion = nombre_institucion
        user.titulo = titulo
        user.githubuser = githubuser
        user.empresa = empresa
        user.save()  

        profesional = Profesional()
        profesional.githubuser = githubuser

        user.profesional = profesional
        user.save()

        cliente = Cliente()
        cliente.empresa = empresa

        user.cliente = cliente
        user.save()



    return jsonify(user.serialize()), 201

@api.route('/Login', methods=['POST'])
def login():

    correo = request.json.get('correo'),
    password = request.json.get('password'),

    if not correo: return jsonify({ "Error": "El correo sera requerido!"}), 400
    if not contraseña: return jsonify({ "Error": "La contraseña sera requerida!"}), 400

    expires = datetime.timedelta(hours=5) 
    access_token = create_access_token(identity=user.id, expire=)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }
    return jsonify(data), 200

@api.route('/Region', methods=['POST', 'GET'])
def region():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200

    if request.method == 'POST':

        nombre = request.json.get('nombre'),

        if not nombre: return jsonify({ "Error": "El nombre de la region sera requerida!"}), 400

        region = Region()
        region.nombre = nombre

    return jsonify(region.serialize()), 201

@api.route('/Rol', methods=['GET', 'POST'])
def rol():
#    if request.method == 'GET':
#       response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nombre_rol = request.json.get('nombre_rol')

        if not nombre_rol: return jsonify({ "Error": "El nombre del rol sera requerido!"}), 400

        rol = Rol()
        rol.nombre_rol = nombre_rol
        
    return jsonify(rol.serialize()), 201

@api.route('/Habilidad_tecnica', methods=['GET', 'POST'])
def habilidad_tecnica():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nivel = request.json.get('nivel')
        profesionales_id = request.json.get('profesionales_id')
        habilidades_id = request.json.get('habilidades_id')

        if not nivel: return jsonify({ "Error": "El nivel sera requerido!"}), 400
        if not profesionales_id: return jsonify({ "Error": "El id del profesional sera requerido!"}), 400
        if not habilidades_id: return jsonify({ "Error": "El id de la habilidad sera requerida!"}), 400

        habilidad_tecnica = Habilidad_tecnica()
        habilidad_tecnica.nivel = nivel
        habilidad_tecnica.profesionales_id = profesionales_id
        habilidad_tecnica.habilidades_id = habilidades_id
      
    return jsonify(habilidad_tecnica.serialize()), 201

@api.route('/Habilidad', methods=['GET', 'POST'])
def habilidad():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nombre = request.json.get('nombre')

        if not nombre: return jsonify({ "Error": "El nombre sera requerido!"}), 400

        habilidad = Habilidad()
        habilidad.nombre = nombre
      
    return jsonify(habilidad.serialize()), 201

@api.route('/Evaluacion', methods=['GET', 'POST'])
def evaluacion():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        fecha = request.json.get('fecha')
        comentario = request.json.get('comentario')
        clientes_id = request.json.get('clientes_id')
        profesionales_id = request.json.get('profesionales_id')

        if not fecha: return jsonify({ "Error": "La fecha sera requerida!"}), 400
        if not comentario: return jsonify({ "Error": "El comentario sera requerido!"}), 400
        if not clientes_id: return jsonify({ "Error": "El id de los clientes sera requerido!"}), 400
        if not profesionales_id: return jsonify({ "Error": "El id de los profesionales sera requerido!"}), 400

        evaluacion = Evaluacion()
        evaluacion.fecha = fecha
        evaluacion.comentario = comentario
        evaluacion.clientes_id = clientes_id
        evaluacion.profesionales_id = profesionales_id
      
    return jsonify(evaluacion.serialize()), 201

@api.route('/Profesional', methods=['GET', 'POST'])
def profesional():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':

        githubuser = request.json.get('githubuser')
        user_id = request.json.get('user_id')

        if not githubuser: return jsonify({ "Error": "El usuario de github sera requerido!"}), 400
        if not user_id: return jsonify({ "Error": "El id del usuario sera requerido!"}), 400

        profesional = Profesional()
        profesional.githubuser = githubuser
        profesional.user_id = user_id

    return jsonify(profesional.serialize()), 201 

@api.route('/Cliente', methods=['GET', 'POST'])
def cliente():
#    if request.method == 'GET':
#        response_body = {
#        "message": "W4U"
#        }
#    return jsonify(response_body), 200 

    if request.method == 'POST':

        empresa = request.json.get('empresa')
        user_id = request.json.get('user_id')

        if not empresa: return jsonify({ "msg": "El nombre de la empresa sera requerida!"}), 400
        if not user_id: return jsonify({ "msg": "El id del usuario sera requerido!"}), 400

        cliente = Cliente()
        cliente.empresa = empresa
        cliente.user_id = user_id

    return jsonify(cliente.serialize()), 201 



