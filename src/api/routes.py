from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Region, Rol, Habilidad_tecnica, Habilidad, Evaluacion, Profesional, Cliente

api = Blueprint('api', __name__)

#cloudinary.config(
#    cloud_name = os.getenv("CLOUD_NAME")
#    api_key = os.getenv("CLOUDINARY_API_KEY")
#    api_secret = os.getenv("CLOUDINARY_API_SECRET") 
#    secure = True
#)

@api.route('/Registro', methods=['POST', 'GET'])
def registro():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
        return jsonify(response_body), 200


    if request.method == 'POST':
       
        nombre = request.form['nombre'],
        apellido = request.form['apellido'],
        avatar = request.files['avatar'],
        correo = request.form['correo',]
        password = request.form['password'],
        foto_carnet = request.files['foto_carnet'],
        telefono = request.form['telefono'],
        direccion = request.form['direccion'],
        nombre_institucion = request.form['nombre_institucion'],
        titulo = request.form['titulo']

        if nombre: return jsonify({ "Error": "El nombre sera requerido!"}), 400
        if apellido: return jsonify({ "Error": "El apellido sera requerido!"}), 400
        if avatar: return jsonify({ "Error": "El avatar no esta disponible!"}), 400
        if correo: return jsonify({ "Error": "El correo sera requerido!"}), 400
        if contraseña: return jsonify({ "Error": "La contraseña sera requerida!"}), 400
        if telefono: return jsonify({ "Error": "El telefono sera requerido!"}), 400
        if direccion: return jsonify({ "Error": "La direccion sera requerida!"}), 400
        
        user = User()
        user.nombre = nombre
        user.apellido = apellido
        user.avatar = avatar
        user.correo = correo
        user.password = password
        user.telefono = telefono
        user.direccion = direccion
        user.nombre_institucion = nombre_institucion
        user.titulo = titulo
        user.save()  


    return jsonify(user.serialize(), response_body), 200

@api.route('/Login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
        return jsonify(response_body), 200


    if request.method == 'POST':

        correo = request.json.get('correo'),
        password = request.json.get('password'),

        if contraseña: return jsonify({ "Error": "La contraseña sera requerida!"}), 400

        login = Login()
        login.correo = correo
        login.password = password

    return jsonify({"Mensaje": "hola"})

@api.route('/Region', methods=['POST', 'GET'])
def region():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200

    if request.method == 'POST':

        nombre = request.json.get('nombre'),
        regiones_id = request.json.get('regiones_id'),

        if nombre: return jsonify({ "Error": "El nombre de la region sera requerida!"}), 400

        region = Region()
        region.nombre = nombre
        region.regiones_id = regiones_id

    return jsonify(response_body), 200

@api.route('/Rol', methods=['GET', 'POST'])
def rol():
    if request.method == 'GET':
       response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nombre_rol = request.json.get('nombre_rol')
        rol_id = request.json.get('rol_id')

        if nombre_rol: return jsonify({ "Error": "El nombre del rol sera requerido!"}), 400
        if rol_id: return jsonify({ "Error": "El id del rol sera requerido!"}), 400

        rol = Rol()
        rol.nombre_rol = nombre_rol
        rol.rol_id = rol_id
        
    return jsonify(response_body), 200

@api.route('/Habilidad_tecnica', methods=['GET', 'POST'])
def habilidad_tecnica():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nivel = request.json.get('nivel')
        profesionales_id = request.json.get('profesionales_id')
        habilidades_id = request.json.get('habilidades_id')

        if  nivel: return jsonify({ "Error": "El nivel sera requerido!"}), 400
        if  profesionales_id: return jsonify({ "Error": "El id del profesional sera requerido!"}), 400
        if  habilidades_id: return jsonify({ "Error": "El id de la habilidad sera requerida!"}), 400

        habilidad_tecnica = Habilidad_tecnica()
        habilidad_tecnica.nivel = nivel
        habilidad_tecnica.profesionales_id = profesionales_id
        habilidad_tecnica.habilidades_id = habilidades_id
      
    return jsonify(response_body), 200

@api.route('/Habilidad', methods=['GET', 'POST'])
def habilidad():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        nombre = request.json.get('nombre')
        habilidades_tecnica = request.json.get('habilidades_tecnica')

        if  nombre: return jsonify({ "Error": "El nombre sera requerido!"}), 400
        if  habilidades_id: return jsonify({ "Error": "La habilidad tecnica sera requerida!"}), 400

        habilidad = Habilidad()
        habilidad.nombre = nombre
        habilidad.habilidad_tecnica = habilidad_tecnica
      
    return jsonify(response_body), 200

@api.route('/Evaluacion', methods=['GET', 'POST'])
def evaluacion():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':
       
        fecha = request.json.get('fecha')
        comentario = request.json.get('comentario')
        clientes_id = request.json.get('clientes_id')
        profesionales_id = request.json.get('profesionales_id')

        if  fecha: return jsonify({ "Error": "La fecha sera requerida!"}), 400
        if  comentario: return jsonify({ "Error": "El comentario sera requerido!"}), 400
        if clientes_id: return jsonify({ "Error": "El id de los clientes sera requerido!"}), 400
        if profesionales_id: return jsonify({ "Error": "El id de los profesionales sera requerido!"}), 400

        evaluacion = Evaluacion()
        evaluacion.fecha = fecha
        evaluacion.comentario = comentario
        evaluacion.clientes_id = clientes_id
        evaluacion.profesionales_id = profesionales_id
      
    return jsonify(response_body), 200

@api.route('/Profesional', methods=['GET', 'POST'])
def profesional():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':

        githubuser = request.json.get('githubuser')
        user_id = request.json.get('user_id')
        profesionales_id = request.json.get('profesionales_id')

        if  githubuser: return jsonify({ "msg": "El usuario de github sera requerido!"}), 400
        if  usuario_id: return jsonify({ "msg": "El id del usuario sera requerido!"}), 400
        if  profesional_id: return jsonify({ "msg": "El id del profesional sera requerido!"}), 400

        profesional = Profesional()
        profesional.githubuser = githubuser
        profesional.usuario_id = usuario_id
        profesional.profesionales_id = profesionales_id

    return jsonify(response_body), 200 

@api.route('/Cliente', methods=['GET', 'POST'])
def cliente():
    if request.method == 'GET':
        response_body = {
        "message": "W4U"
        }
    return jsonify(response_body), 200 

    if request.method == 'POST':

        empresa = request.json.get('empresa')
        user_id = request.json.get('user_id')
        clientes_id = request.json.get('clientes_id')

        if  empresa: return jsonify({ "msg": "El nombre de la empresa sera requerida!"}), 400
        if  usuario_id: return jsonify({ "msg": "El id del usuario sera requerido!"}), 400
        if  clientes_id: return jsonify({ "msg": "El id del cliente sera requerido!"}), 400

        cliente = Cliente()
        cliente.empresa = empresa
        cliente.usuario_id = usuario_id
        cliente.clientes_id = clientes_id

    return jsonify(response_body), 200 



