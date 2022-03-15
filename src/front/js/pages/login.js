import React from "react";
import contraseña from "../../img/contraseña.jpg";
import mail from "../../img/mail-logo.png";
import profile from "../../img/usuario.webp";
import "./../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const Login = () => {
  return (
    <div className="app">
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
                  errores.correo = "introduce tu correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.correo
                  )
                ) {
                  errores.correo = "Ingresa un correo valido";
                }

                if (!valores.contraseña) {
                  errores.contraseña = "Ingresa tu contraseña";
                } else if (
                  !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$/.test(
                    valores.contraseña
                  )
                ) {
                  errores.contraseña = "";
                }
                return errores;
              }}
            >
              {({ errors }) => (
                <Form>
                  <h1>Inicio de sesion</h1>

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
                      <button>login</button>
                    </div>

                    <div>
                      <p>
                        <a href="#">Olvido su contraseña ?</a> Or{" "}
                        <a href="#">Registrarse</a>
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
  );
};
