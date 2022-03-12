"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Evaluacion, 
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

"""@api.route('/hello', methods=['POST', 'GET'])
 def handle_hello():
   response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
  """
 
@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def users(id = None):
    if request.method == 'GET':
        if id is not None:
            user = User.query.get(id)
            if not user: return jsonify({ "msg": "No se encontro el usuario!"}), 404
            return jsonify(user.serilize()), 200
        else:
            users = User.query.all()
            users = list(map(lambda users: user.serialize(), users))
            return jsonify(users), 200


    if request.method == 'POST':
       
        nombre = request.json.get('nombre')
        apellido = request.json.get('apellido')
        correo = request.json.get('correo')
        contraseña = request.json.get('contraseña')
        telefono = request.json.get('telefono')

        user = User()
        user.nombre = nombre
        user.apellido = apellido
        user.correo = correo
        user.contraseña = contraseña
        user.telefono = telefono
        
        if not nombre: return jsonify({ "msg": "El nombre sera requerido!"}), 400
        if not apellido: return jsonify({ "msg": "El apellido sera requerido!"}), 400
        if not correo: return jsonify({ "msg": "El correo sera requerido!"}), 400
        if not contraseña: return jsonify({ "msg": "La contraseña sera requerida!"}), 400
        if not telefono: return jsonify({ "msg": "El telefono sera requerido!"}), 400


    return jsonify(response_body), 200

    if request.method == 'PUT':
     
        nombre = request.json.get('nombre') 
        apellido = request.json.get('apellido')
        correo = request.json.get('correo')
        contraseña = request.json.get('contraseña')
        telefono = request.json.get('telefono')

        if not nombre: return jsonify({ "msg": "El nombre sera requerido!"}), 400
        if not apellido: return jsonify({ "msg": "El apellido sera requerido!"}), 400
        if not correo: return jsonify({ "msg": "El correo sera requerido!"}), 400
        if not contraseña: return jsonify({ "msg": "La contraseña sera requerida!"}), 400
        if not telefono: return jsonify({ "msg": "El telefono sera requerido!"}), 400

        user = User.query.get(id) 

        if not user: return jsonify({ "msg": "Usuario no encontrado!"}), 404

""" tabla de Evaluacion """

@app.route('/evaluaciones', methods=['GET', 'POST'])
@app.route('/evaluaciones/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def evaluaciones(id = None):
    if request.method == 'GET':
        if id is not None:
            evaluacion = Evaluacion.query.get(id)
            if not Evaluacion: return jsonify({ "msg": "Tu evaluacion no se ha encontrado!"}), 404
            return jsonify(evaluacion.serilize()), 200
        else:
            evaluaciones = Evaluacion.query.all()
            evaluaciones = list(map(lambda evaluaciones: evaluacion.serialize(), evaluaciones))
            return jsonify(evaluaciones), 200


    if request.method == 'POST':
       
        fecha_evaluacion = request.json.get('fecha_evaluacion')
        comentario = request.json.get('comentario')
        user_id = request.json.get('user_id')
        clientes_id = request.json.get('clientes_id')
        profesionales_id = request.json.get('profesionales_id')

        evaluacion = Evaluacion()
        evaluacion.fecha_evaluacion = fecha_evaluacion
        evaluacion.comentario = comentario
        evaluacion.user_id = user_id
        evaluacion.clientes_id = clientes_id
        evaluacion.profesionales_id = profesionales_id
        
        if not fecha_evaluacion: return jsonify({ "msg": "La fecha_evaluacion sera requerida!"}), 400
        if not cometario: return jsonify({ "msg": "El comentario sera requerido!"}), 400
        if not user_id: return jsonify({ "msg": "El user_id sera requerido!"}), 400
        if not clientes_id: return jsonify({ "msg": "Los clientes_id seran requerido!"}), 400
        if not profesionales: return jsonify({ "msg": "Los profesionales_id seran requerido!"}), 400

    return jsonify(response_body), 200

    if request.method == 'PUT':
     
        evaluacion = Evaluacion()
        evaluacion.fecha_evaluacion = fecha_evaluacion
        evaluacion.comentario = comentario
        evaluacion.user_id = user_id
        evaluacion.clientes_id = clientes_id
        evaluacion.profesionales_id = profesionales_id

        if not fecha_evaluacion: return jsonify({ "msg": "La fecha_evaluacion sera requerida!"}), 400
        if not cometario: return jsonify({ "msg": "El comentario sera requerido!"}), 400
        if not user_id: return jsonify({ "msg": "El user_id sera requerido!"}), 400
        if not clientes_id: return jsonify({ "msg": "Los clientes_id seran requerido!"}), 400
        if not profesionales: return jsonify({ "msg": "Los profesionales_id seran requerido!"}), 400

        evaluacion = Evaluacion.query.get(id) 

        if not evaluacion: return jsonify({ "msg": "La evaluacion no ha sido encontrada!"}), 404

""" tabla de Roles """

@app.route('/roles', methods=['GET', 'POST'])
@app.route('/roles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def evaluaciones(id = None):
    if request.method == 'GET':
        if id is not None:
            rol = Rol.query.get(id)
            if not Rol: return jsonify({ "msg": "Tu rol no se ha encontrado!"}), 404
            return jsonify(rol.serilize()), 200
        else:
            roles = Rol.query.all()
            roles = list(map(lambda roles: rol.serialize(), roles))
            return jsonify(evaluaciones), 200


    if request.method == 'POST':
       
        nombre_roles = request.json.get('nombre_roles')

        rol = Rol()
        rol.nombre_roles = nombre_roles
        
        if not nombre_roles: return jsonify({ "msg": "El nombre_roles sera requerida!"}), 400

    return jsonify(response_body), 200

    if request.method == 'PUT':
     
        rol = Rol()
        rol.nombre_roles = nombre_roles

      if not nombre_roles: return jsonify({ "msg": "El nombre_roles sera requerida!"}), 400

        rol = Rol.query.get(id) 

        if not rol: return jsonify({ "msg": "El rol no ha sido encontrado!"}), 404

""" tabla de Categoria """

@app.route('/categorias', methods=['GET', 'POST'])
@app.route('/categorias/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def categorias(id = None):
    if request.method == 'GET':
        if id is not None:
            categoria = Categoria.query.get(id)
            if not Categoria: return jsonify({ "msg": "Tu categoria no se ha encontrada!"}), 404
            return jsonify(categoria.serilize()), 200
        else:
            categorias = Categoria.query.all()
            categorias = list(map(lambda categorias: categoria.serialize(), categorias))
            return jsonify(categorias), 200


    if request.method == 'POST':
       
        nombre_roles = request.json.get('nombre_roles')

        rol = Rol()
        rol.nombre = nombre
        rol.tipo_rol_id = tipo_rol_id
        
        if not nombre: return jsonify({ "msg": "El nombre sera requerida!"}), 400
        if not tipo_rol_id: return jsonify({ "msg": "El tipo_rol_id sera requerido!"}), 400

    return jsonify(response_body), 200

    if request.method == 'PUT':
     
        rol = Rol()
        rol.nombre = nombre
        rol.tipo_rol_id = tipo_rol_id

        if not nombre: return jsonify({ "msg": "El nombre sera requerida!"}), 400
        if not tipo_rol_id: return jsonify({ "msg": "El tipo_rol_id sera requerida!"}), 400

        categoria = Categoria.query.get(id) 

        if not categoria: return jsonify({ "msg": "La categoria no ha sido encontrada!"}), 404