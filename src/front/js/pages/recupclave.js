import React from "react";
import contraseña from "../../img/contraseña.jpg";
import mail from "../../img/mail-logo.png";
import profile from "../../img/2w.png";
import "./../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Navbarlogin from "../component/navbarlogin";

export const Recupclave = () => {
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
                                    correo: "",
                                    pregunta1: "",
                                }}
                                validate={(valores) => {
                                    let errores = {};

                                    if (!valores.correo) {
                                        errores.correo = "introduce tu correo";
                                    } else if (
                                        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                            valores.correo
                                        )
                                    ) {
                                        errores.correo = "Ingresa un correo valido";
                                    }

                                    if (!valores.pregunta1) {
                                        errores.pregunta1 = "Ingresa tu respuesta";
                                    } else if (
                                        !/^(?=.*[a-z])(?=.*[A-Z])+$/.test(
                                            valores.pregunta1
                                        )
                                    ) {
                                        errores.pregunta1 = "";
                                    }
                                    return errores;
                                }}
                            >
                                {({ errors }) => (
                                    <Form>
                                        <h2>Recuperar contraseña</h2>

                                        <div>
                                            <img src={mail} alt="email" className="email" />
                                            <Field
                                                type="text"
                                                name="correo"
                                                placeholder="Email"
                                                id="correo"
                                            />
                                            <ErrorMessage
                                                name="correo"
                                                component={() => (
                                                    <div className="error">{errors.correo}</div>
                                                )}
                                            />
                                        </div>

                                        <div className="second-input">
                                            <h5>Preguntas de seguridad</h5>
                                            <img src={contraseña} alt="pregunta1" className="email" />
                                            <Field
                                                type="Escribe tu respuesta"
                                                placeholder="Nombre de tu primera mascota"
                                                name="contraseña"
                                                id="contraseña"
                                            />
                                            <div className="second-input">
                                                <Field
                                                    type="Escribe tu respuesta"
                                                    placeholder="Nombre de la ciudad donde naciste"
                                                    name="contraseña"
                                                    id="contraseña"
                                                /></div>
                                            <ErrorMessage
                                                name="pregunta1"
                                                component={() => (
                                                    <div className="error">{errors.pregunta1}</div>
                                                )}
                                            />
                                            <div />
                                            <div className="login-button">
                                                <button>enviar</button>
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