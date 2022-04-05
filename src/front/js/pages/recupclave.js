import React, { useState } from "react";
import contraseña from "../../img/contraseña.jpg";
import profile from "../../img/2w.png";
import "./../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Navbarlogin from "../component/navbarlogin";

export const Recupclave = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    let styles = {
        background: "url(/img/fondorecupclave.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
    }
    return (
        <><Navbarlogin />
            <div className="app" style={styles}>
                <div className="sub-app " >
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />
                            </div>
                        </div>
                        <div className="form-login">
                            <Formik
                                initialValues={{
                                    correo: '',
                                    pregunta1: '',
                                    pregunta2: '',
                                }}
                                validate={(valores) => {
                                    let errores = {};

                                    if (!valores.correo) {
                                        errores.correo = 'Ingresa tu Correo'
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                                        errores.correo = 'Ingresa un correo valido'
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
                                    <Form>
                                        <h2>Recuperar contraseña</h2>

                                        <div>
                                            <label htmlFor="correo"></label>
                                            <Field
                                                type="text"
                                                name="correo"
                                                placeholder="Correo@correo.com"
                                                id="correo"
                                            />
                                            <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                                        </div>

                                        <div className="second-input">
                                            <h5>Preguntas de seguridad</h5>
                                            <img src={contraseña} alt="pregunta1" className="email" />
                                            <Field
                                                type="text"
                                                placeholder="Nombre de tu primera mascota"
                                                name="pregunta1"
                                                id="pregunta1"
                                            />
                                            <ErrorMessage name="pregunta1" component={() => (
                                                <div className="error">{errors.pregunta1}</div>)} />
                                            <div className="second-input">
                                                <Field
                                                    type="text"
                                                    placeholder="Nombre de la ciudad donde naciste"
                                                    name="pregunta2"
                                                    id="pregunta2"
                                                />
                                                <ErrorMessage name="pregunta2" component={() => (
                                                    <div className="error">{errors.pregunta2}</div>)} />
                                            </div>
                                            <div />
                                            <div className="log-button">
                                                <button type="submit">enviar</button>
                                                {formularioEnviado && <p className="exito"><strong>Formulario enviado exitosamente!</strong></p>}
                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div></>)
}