import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import img3 from "../../img/formcliente.png";
import Navbarclient from "../component/navbarclient.js"


export const RegistroClientes = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return (
        <>
            <Navbarclient />
            <div className="contain">
                <div className="row">
                    <div className="col-md-12 formulario-cliente">
                        <div className="RegistroProfesionales">

                            <Formik
                                initialValues={{
                                    nombre: '',
                                    apellido: '',
                                    rut: '',
                                    fotocarnet: '',
                                    correo: '',
                                    contraseña: '',
                                    pregunta1: '',
                                    pregunta2: '',
                                    dirección: '',
                                    región: '',
                                    ciudad: '',
                                }}
                                validate={(valores) => {
                                    let errores = {};

                                    if (!valores.nombre) {
                                        errores.nombre = 'Ingresa un nombre'
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                        errores.nombre = 'Ingresa un nombre'
                                    }

                                    if (!valores.apellido) {
                                        errores.apellido = 'Campo no puede estar vacio'
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                                        errores.apellido = 'Ingresa apellido'
                                    }

                                    if (!valores.rut) {
                                        errores.rut = 'Ingresa tu Rut'
                                    } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(valores.rut)) {
                                        errores.rut = 'Ingresa un formato valido'
                                    }

                                    if (!valores.fotocarnet) {
                                        errores.fotocarnet = 'Debes seleccionar un archivo'
                                    } else if (!/^.*\.(jpg|JPG)$/.test(valores.fotocarnet)) {
                                        errores.fotocarnet = 'Por favor verifica que tu archivo sea .jpg'
                                    }

                                    if (!valores.correo) {
                                        errores.correo = 'Ingresa tu Correo'
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                                        errores.correo = 'Ingresa un correo valido'
                                    }

                                    if (!valores.contraseña) {
                                        errores.contraseña = 'Ingresa contraseña'
                                    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$/.test(valores.contraseña)) {
                                        errores.contraseña = 'Al menos un número entre [0-9], al menos una letra minuscula, al menos una letra mayuscula, al menos un simbolo [*.!@#$%^&(){}[], que tenga entre 8 y 32 caracteres'
                                    }

                                    if (!valores.pregunta1) {
                                        errores.pregunta1 = 'Campo no puede estar vacio'
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pregunta1)) {
                                        errores.pregunta1 = 'Ingresa un texto'
                                    }

                                    if (!valores.pregunta2) {
                                        errores.pregunta2 = 'Campo no puede estar vacio'
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pregunta2)) {
                                        errores.pregunta2 = 'Ingresa texto'
                                    }

                                    if (!valores.región) {
                                        errores.región = 'Selecciona una opción'
                                    }

                                    if (!valores.ciudad) {
                                        errores.ciudad = 'Ingresa una ciudad'
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ciudad)) {
                                        errores.nombre = 'Ingresa una ciudad'
                                    }

                                    return errores;

                                }}
                                onSubmit={(valores, { resetForm }) => {
                                    resetForm();
                                    console.log("Formulario enviado")
                                    cambiarFormularioEnviado(true);
                                    setTimeout(() => cambiarFormularioEnviado(false), 4000);
                                }}

                            >
                                {({ errors }) => (
                                    <Form className="formulario" >
                                        <h1>Registro para clientes</h1>
                                        <br />
                                        <h2>Datos personales</h2>
                                        <div>
                                            <label htmlFor="nombre">Nombre</label>
                                            <Field
                                                type="text"
                                                name="nombre"
                                                placeholder="Nombre"
                                                id="nombre"
                                            />
                                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="apellido">Apellido</label>
                                            <Field
                                                type="text"
                                                name="apellido"
                                                placeholder="Apellido"
                                                id="apellido"
                                            />
                                            <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="rut">Rut</label>
                                            <Field
                                                type="text"
                                                name="rut"
                                                placeholder="Rut formato: 11111111-1"
                                                id="Rut"
                                            />
                                            <ErrorMessage name="rut" component={() => (<div className="error">{errors.rut}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="foto del rut">Foto del Rut (solo formato .jpg)</label>
                                            <Field
                                                type="file"
                                                name="fotocarnet"
                                                id="fotocarnet"
                                            />
                                            <ErrorMessage name="fotocarnet" component={() => (<div className="error">{errors.fotocarnet}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="correo">Correo</label>
                                            <Field
                                                type="text"
                                                name="correo"
                                                placeholder="Correo@correo.com"
                                                id="correo"
                                            />
                                            <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="constraseña">Contraseña</label>
                                            <Field
                                                type="password"
                                                name="contraseña"
                                                placeholder="Contraseña"
                                                id="contraseña"
                                            />
                                            <ErrorMessage name="contraseña" component={() => (<div className="error">{errors.contraseña}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="pregunta1">Pregunta de seguridad: Nombre de tu primera mascota.</label>
                                            <Field
                                                type="text"
                                                name="pregunta1"
                                                placeholder="ejemplo: Laika"
                                                id="pregunta1"
                                            />
                                            <ErrorMessage name="pregunta1" component={() => (<div className="error">{errors.pregunta1}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="pregunta2">Pregunta de seguridad 2: Nombre de la ciudad donde naciste.</label>
                                            <Field
                                                type="text"
                                                name="pregunta2"
                                                placeholder="ejemplo: Osorno"
                                                id="pregunta2"
                                            />
                                            <ErrorMessage name="pregunta2" component={() => (<div className="error">{errors.pregunta2}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="dirección">Dirección (Opcional)</label>
                                            <Field
                                                type="text"
                                                name="dirección"
                                                placeholder="Calle, Villa, Número, Depto. Block"
                                                id="dirección"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="región">Región:</label>
                                            <Field name="región" as="select">
                                                <option value="0">Seleccionar una opción</option>
                                                <option value="1">Arica y Parinacota</option>
                                                <option value="2">Tarapacá</option>
                                                <option value="3">Antofagasta</option>
                                                <option value="4">Atacama</option>
                                                <option value="5">Coquimbo</option>
                                                <option value="6">Valparaiso</option>
                                                <option value="7">Región Metropolitana</option>
                                                <option value="8">Libertador General Bernardo O'Higgins</option>
                                                <option value="9">Maule</option>
                                                <option value="10">Ñuble</option>
                                                <option value="11">Del Biobío</option>
                                                <option value="12">La Araucanía</option>
                                                <option value="13">Los Ríos</option>
                                                <option value="14">Los Lagos</option>
                                                <option value="15">Aysén del General Carlos Ibañez del Campo</option>
                                                <option value="16">Magallanes y de la Antártica Chilena</option>
                                            </Field>
                                            <ErrorMessage name="región" component={() => (<div className="error">{errors.región}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="ciudad">Ciudad</label>
                                            <Field
                                                type="text"
                                                name="ciudad"
                                                placeholder="Ciudad"
                                                id="Ciudad"
                                            />
                                            <ErrorMessage name="ciudad" component={() => (<div className="error">{errors.ciudad}</div>)} />
                                        </div>
                                        <button type="submit">Enviar</button>
                                        {formularioEnviado && <p className="exito"><strong>Formulario enviado exitosamente!</strong></p>}
                                    </Form>
                                )}
                            </Formik>
                            <img className="image3" src={img3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};





