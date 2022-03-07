import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import img3 from "../../img/img3.png";



export const RegistroClientes = (props) => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputRut, cambiarInputRut] = useState('');
    const [inputFotodelRut, cambiarInputFotodelRut] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputContraseña, cambiarInputContraseña] = useState('');
    const [inputDirección, cambiarInputDirección] = useState('');
    const [inputCiudad, cambiarInputCiudad] = useState('');


    // Funcion que se encargara de validar los datos y enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos validacion del formulario ...
        // Si todo es correcto enviamos el formulario

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


    return (


        <div className="RegistroClientes">

            <form action="" onSubmit={handleSubmit} className="formulario">
                <h1>Registro para clientes</h1>
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
                <button type="submit">Enviar</button>
            </form>
            <img className="image3" src={img3} />




        </div>


    );
};


