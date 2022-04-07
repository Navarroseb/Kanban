import React, { useState } from "react";
import contraseña from "../../img/contraseña.jpg";
import mail from "../../img/mail-logo.png";
import profile from "../../../../dist/img/3w.png";
import "./../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Navbarlogin from "../component/navbarlogin";
import { FooterLogin } from "../component/footerlogin";

export const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  let styles = {
    background: "url(/img/fondologin.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
  }
  return (
    <>
      <Navbarlogin />
      <div className="app" style={styles}>
        <div className="sub-app ">
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
                  contraseña: "",
                }}
                validate={(valores) => {
                  let errores = {};

                  if (!valores.correo) {
                    errores.correo = 'Ingresa tu Correo'
                  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                    errores.correo = 'Ingresa un correo valido'
                  }

                  if (!valores.contraseña) {
                    errores.contraseña = "Ingresa tu contraseña";
                  } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$/.test(valores.contraseña)) {
                    errores.contraseña = "";
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
                    <h1 className="titulo-login">Inicio de Sesión</h1>

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
                      <img src={contraseña} alt="contraseña" className="email" />
                      <Field
                        type="password"
                        placeholder="Contraseña"
                        name="contraseña"
                        id="contraseña"
                      />
                      <ErrorMessage
                        name="contraseña"
                        component={() => (
                          <div className="error">{errors.contraseña}</div>
                        )}
                      />
                      <div />
                      <div className="login-button">
                        <button type="submit">Enviar</button>
                        {formularioEnviado && <p className="exito"><strong>Bienvenido!</strong></p>}
                      </div>

                      <div>
                        <p>
                          <a id="a-1" href={"/recuperarcontraseña"}>Olvido su contraseña?</a>{" "}
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <FooterLogin />
    </>
  );
};
