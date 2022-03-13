import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import PropTypes from "prop-types";
//import { Context } from "../store/appContext";
import img1 from "../../img/formprof.png";
import img2 from "../../img/formprof2.png";
import { number } from "prop-types";
import checkUserGithub from "./githubuser"
import { AiOutlineGithub } from 'react-icons/ai';
import Navbar2 from "../component/navbar2"


export const RegistroProfesionales = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario Enviado!');
    }

    return (
        <><Navbar2 />
            <div className="contanier fomulario-profesional">
                <div className="row">
                    <div className="col-md-12">

                        <div className="RegistroProfesionales">
                            <Formik
                                initialValues={{
                                    nombre: '',
                                    rut: '',
                                    fotorut: '',
                                    correo: '',
                                    contraseña: '',
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

                                    if (!valores.rut) {
                                        errores.rut = 'Ingresa tu Rut'
                                    } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(valores.rut)) {
                                        errores.rut = 'Ingresa un formato valido'
                                    }

                                    if (!valores.fotorut) {
                                        errores.fotorut = 'Debes seleccionar un archivo'
                                    } else if (!/^.*\.(jpg|JPG|pdf|PDF)$/.test(valores.fotorut)) {
                                        errores.fotorut = 'Por favor verifica que tu archivo sea .jpg o .pdf'
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

                            >
                                {({ errors }) => (
                                    <Form className="formulario" >
                                        <h1>Registro para profesionales</h1>
                                        <h2>Datos personales</h2>
                                        <div>
                                            <label htmlFor="nombre">Nombre y Apellido</label>
                                            <Field
                                                type="text"
                                                name="nombre"
                                                placeholder="Nombre y Apellido"
                                                id="nombre"
                                            />
                                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />

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
                                            <label htmlFor="foto del rut">Foto del Rut (solo formato .jpg o .pdf)</label>
                                            <Field
                                                type="file"
                                                name="fotorut"
                                                id="fotoRut"
                                            />
                                            <ErrorMessage name="fotorut" component={() => (<div className="error">{errors.fotorut}</div>)} />
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
                                    </Form>
                                )}
                            </Formik>
                            <img className="image1" src={img1} />
                            <img className="image2" src={img2} />


                            <Formik
                                initialValues={{
                                    nombre_institución: '',
                                    certificado: '',
                                    githubuser: '',
                                    herramientas: '',

                                }}
                                validate={async (valores) => {
                                    let errores = {};

                                    if (!valores.nombre_institución) {
                                        errores.nombre_institución = 'Campo no puede estar vacio'
                                    } else if (!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.nombre_institución)) {
                                        errores.nombre_institución = 'Ingresa un nombre'
                                    }

                                    if (!valores.certificado) {
                                        errores.certificado = 'Debes seleccionar un archivo'
                                    } else if (!/^.*\.(jpg|JPG|pdf|PDF)$/.test(valores.certificado)) {
                                        errores.certificado = 'Por favor verifica que tu archivo sea .jpg o .pdf'
                                    }

                                    if (!valores.githubuser) {
                                        errores.githubuser = 'Campo no puede estar vacio'
                                    } else if (!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.githubuser)) {
                                        errores.githubuser = 'Ingresa tu usuario'
                                    } else if (!await checkUserGithub(valores.githubuser)) {
                                        errores.githubuser = 'Usuario incorrecto'
                                        console.log(valores.githubuser)
                                    } else if (await checkUserGithub(valores.githubuser)) {
                                        errores.githubuser = <AiOutlineGithub color="black" size="4em" />
                                        console.log(valores.githubuser)
                                    }
                                    if (!valores.herramientas) {
                                        errores.herramientas = 'Campo no puede estar vacio'
                                    }
                                    return errores;
                                }}
                                onSubmit={(valores, { resetForm }) => {
                                    resetForm();
                                    console.log(valores)//Llamar a una API para enviar valores
                                    cambiarFormularioEnviado(true);
                                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                                }}
                            >
                                {({ errors }) => (
                                    <Form className="formulario2">
                                        <h2>Datos profesionales</h2>
                                        <div>
                                            <label htmlFor="nombre_institución">Nombre de Instituto, Universidad o Plataforma</label>
                                            <Field
                                                type="text"
                                                name="nombre_institución"
                                                placeholder="Nombre de Instituto, Universidad o Plataforma"
                                                id="nombre_institución"
                                            />
                                            <ErrorMessage name="nombre_institución" component={() => (<div className="error">{errors.nombre_institución}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="certificado">Título o certificado</label>
                                            <Field
                                                type="file"
                                                name="certificado"
                                                placeholder=""
                                                id="certificado"
                                            />
                                            <ErrorMessage name="certificado" component={() => (<div className="error">{errors.certificado}</div>)} />
                                        </div>
                                        <div>
                                            <label htmlFor="githubuser">Username de Github</label>
                                            <Field
                                                type="text"
                                                name="githubuser"
                                                placeholder="Usuario de Github"
                                                id="githubuser"
                                            />
                                            <ErrorMessage name="githubuser" component={() => (<div className="error">{errors.githubuser}</div>)} />
                                            {/* {errors.githubuser === "icono" ? <AiOutlineGithub /> : ""} */}
                                        </div>
                                        <div>
                                            <label htmlFor="herramientas">Herramientas que domina:</label>
                                            <Field as="textarea"
                                                rows="5"
                                                type="text"
                                                name="herramientas"
                                                placeholder="Señale las herramientas que domina..."
                                                id="herramientas"
                                            />
                                            <ErrorMessage name="herramientas" component={() => (<div className="error">{errors.herramientas}</div>)} />
                                        </div>
                                        <button type="submit">Enviar</button>
                                        {formularioEnviado && <p className="exito">Formulario enviado exitosamente!</p>}
                                    </Form>
                                )}
                            </Formik>
                        </div></div></div> </div> </>


    );
};


