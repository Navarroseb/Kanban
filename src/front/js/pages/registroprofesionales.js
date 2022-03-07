import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";


export const RegistroProfesionales = (props) => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputRut, cambiarInputRut] = useState('');
    const [inputFotodelRut, cambiarInputFotodelRut] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputContraseña, cambiarInputContraseña] = useState('');
    const [inputDirección, cambiarInputDirección] = useState('');
    const [inputCiudad, cambiarInputCiudad] = useState('');
    const [inputnombre_institución, cambiarInputnombre_institución] = useState('');
    const [inputcertificado, cambiarInputcertificado] = useState('');
    const [inputgithubuser, cambiarInputgithubuser] = useState('');
    const [inputHerramientas, cambiarInputHerramientas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario Enviado!');
    }

    // Funcion que se encarga de cambiar el estado del inputNombre
    const handleInputNombre = (e) => { cambiarInputNombre(e.target.value); }
    const handleInputRut = (e) => { cambiarInputRut(e.target.value); }
    const handleInputFotodelRut = (e) => { cambiarInputFotodelRut(e.target.value); }
    const handleInputCorreo = (e) => { cambiarInputCorreo(e.target.value); }
    const handleInputContraseña = (e) => { cambiarInputContraseña(e.target.value); }
    const handleInputDirección = (e) => { cambiarInputDirección(e.target.value); }
    const handleInputCiudad = (e) => { cambiarInputCiudad(e.target.value); }
    const handleInputnombre_institución = (e) => { cambiarInputnombre_institución(e.target.value); }
    const handleInputcertificado = (e) => { cambiarInputcertificado(e.target.value); }
    const handleInputgithubuser = (e) => { cambiarInputgithubuser(e.target.value); }
    const handleInputHerramientas = (e) => { cambiarInputHerramientas(e.target.value); }

    return (
        <div className="RegistroProfesionales">
            <Formik
                onSubmit={() => {


                }}


            >
                {() => (
                    <form action="" onSubmit={handleSubmit} className="formulario">
                        <h1>Registro para profesionales</h1>
                        <h2>Datos personales</h2>
                        <div>
                            <label htmlFor="nombre">Nombre y Apellido</label>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre y Apellido"
                                id="nombre"
                                value={inputNombre}
                                onChange={handleInputNombre}
                            />
                        </div>
                        <div>
                            <label htmlFor="rut">Rut</label>
                            <input
                                type="number"
                                name="rut"
                                placeholder="Rut"
                                id="Rut"
                                value={inputRut}
                                onChange={handleInputRut}
                            />
                        </div>
                        <div>
                            <label htmlFor="foto del rut">Foto del Rut</label>
                            <input
                                type="file"
                                name="rut"
                                placeholder="Rut"
                                id="Rut"
                                value={inputFotodelRut}
                                onChange={handleInputFotodelRut}
                            />
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input
                                type="text"
                                name="correo"
                                placeholder="Correo"
                                id="correo"
                                value={inputCorreo}
                                onChange={handleInputCorreo}
                            />
                        </div>
                        <div>
                            <label htmlFor="constraseña">Contraseña</label>
                            <input
                                type="password"
                                name="contraseña"
                                placeholder="Contraseña"
                                id="contraseña"
                                value={inputContraseña}
                                onChange={handleInputContraseña}
                            />
                        </div>
                        <div>
                            <label htmlFor="dirección">Dirección</label>
                            <input
                                type="text"
                                name="dirección"
                                placeholder="Calle, Villa, Número, Depto. Block"
                                id="dirección"
                                value={inputDirección}
                                onChange={handleInputDirección}
                            />
                        </div>
                        <div>
                            <label htmlFor="región">Región:</label>
                            <select>
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
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ciudad">Ciudad</label>
                            <input
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                id="Ciudad"
                                value={inputCiudad}
                                onChange={handleInputCiudad}
                            />
                        </div>
                    </form>
                )}
            </Formik>
            <img className="image1" src={img1} />
            <img className="image2" src={img2} />

            <form action="" onSubmit={handleSubmit} className="formulario2">
                <h2>Datos profesionales</h2>
                <div>
                    <label htmlFor="nombre_institución">Nombre de Instituto, Universidad o Plataforma</label>
                    <input
                        type="text"
                        name="nombre_institución"
                        placeholder="Nombre de Instituto, Universidad o Plataforma"
                        id="nombre_institución"
                        value={inputnombre_institución}
                        onChange={handleInputnombre_institución}
                    />
                </div>
                <div>
                    <label htmlFor="certificado">Título o certificado</label>
                    <input
                        type="file"
                        name="certificado"
                        placeholder=""
                        id="certificado"
                        value={inputcertificado}
                        onChange={handleInputcertificado}
                    />
                </div>
                <div>
                    <label htmlFor="githubuser">Username de Github</label>
                    <input
                        type="text"
                        name="githubuser"
                        placeholder="Usuario de Github"
                        id="githubuser"
                        value={inputgithubuser}
                        onChange={handleInputgithubuser}
                    />
                </div>
                <div>
                    <label htmlFor="herramientas">Herramientas que domina:</label>
                    <input
                        type="text-area"
                        name="herramientas"
                        placeholder="Señale las herramientas que domina..."
                        id="herramientas"
                        value={inputHerramientas}
                        onChange={handleInputHerramientas}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>


    );
};


