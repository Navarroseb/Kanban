import React from "react";
import contraseña from "../../img/contraseña.jpg";
import mail from "../../img/mail-logo.png";
import profile from "../../img/usuario.webp";
import login from "../../styles/login.css";

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
          <div>
            <h1>Inicio de sesion</h1>

            <div>
              <img src={mail} alt="email" className="email" />
              <input type="text" placeholder="Email" className="name" />
            </div>

            <div className="second-input">
              <img src={contraseña} alt="contraseña" className="email" />
              <input type="text" placeholder="Contraseña" className="name" />
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
          </div>
        </div>
      </div>
    </div>
  );
};
