import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import PropTypes from "prop-types";
//import { Context } from "../store/appContext";
import img3 from "../../img/img3.png";



export const RegistroClientes = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    /* //const [inputNombre, cambiarInputNombre] = useState('');
    const [inputRut, cambiarInputRut] = useState('');
    const [inputFotodelRut, cambiarInputFotodelRut] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputContraseña, cambiarInputContraseña] = useState('');
    const [inputDirección, cambiarInputDirección] = useState('');
    const [inputCiudad, cambiarInputCiudad] = useState('');
    const [inputnombre_institución, cambiarInputnombre_institución] = useState('');
    const [inputcertificado, cambiarInputcertificado] = useState('');
    const [inputgithubuser, cambiarInputgithubuser] = useState('');
    const [inputHerramientas, cambiarInputHerramientas] = useState(''); */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario Enviado!');
    }

    // Funcion que se encarga de cambiar el estado del inputNombre
    //const handleInputNombre = (e) => { cambiarInputNombre(e.target.value); }
    /* const handleInputRut = (e) => { cambiarInputRut(e.target.value); }
    const handleInputFotodelRut = (e) => { cambiarInputFotodelRut(e.target.value); }
    const handleInputCorreo = (e) => { cambiarInputCorreo(e.target.value); }
    const handleInputContraseña = (e) => { cambiarInputContraseña(e.target.value); }
    const handleInputDirección = (e) => { cambiarInputDirección(e.target.value); }
    const handleInputCiudad = (e) => { cambiarInputCiudad(e.target.value); }
    const handleInputnombre_institución = (e) => { cambiarInputnombre_institución(e.target.value); }
    const handleInputcertificado = (e) => { cambiarInputcertificado(e.target.value); }
    const handleInputgithubuser = (e) => { cambiarInputgithubuser(e.target.value); }
    const handleInputHerramientas = (e) => { cambiarInputHerramientas(e.target.value); } */

    return (
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
            <img className="image3" src={img3} />
        </div>
    );
};





