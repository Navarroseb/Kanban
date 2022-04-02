  
import os
from flask_admin import Admin
from .models import db, User , Region, Rol, Habilidad_tecnica, Habilidad, Profesional, Cliente, Evaluacion
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Rol, db.session))
    admin.add_view(ModelView(Region, db.session))
    admin.add_view(ModelView(Habilidad_tecnica, db.session))
    admin.add_view(ModelView(Habilidad, db.session))
    admin.add_view(ModelView(Evaluacion, db.session))
    admin.add_view(ModelView(Profesional, db.session))
    admin.add_view(ModelView(Cliente, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))