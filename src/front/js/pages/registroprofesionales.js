import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import img1 from "../../img/formprof.png";
import img2 from "../../img/formprof2.png";
import checkUserGithub from "./githubuser";
import { AiOutlineGithub } from 'react-icons/ai';
import Navbarprof from "../component/navbarprof";



export const RegistroProfesionales = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Navbarprof />
      <div id="formprofesional" className="contanier fomulario-profesional">
        <div className="row">
          <div className="col-md-12">

            <div className="RegistroProfesionales">
              <Formik

                initialValues={{
                  nombre: '',
                  apellido: '',
                  rut: '',
                  fotocarnet: '',
                  teléfono: '',
                  correo: '',
                  contraseña: '',
                  dirección: '',
                  región: '',
                  ciudad: '',
                  nombre_institución: '',
                  certificado: '',
                  githubuser: '',
                }}
                validate={async (valores) => {
                  let errores = {};

                  if (!valores.nombre) {
                    errores.nombre = 'Campo no puede estar vacio'
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'Ingresa nombre'
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
                  } else if (!/^.*\.(jpg|JPG|pdf|PDF)$/.test(valores.fotocarnet)) {
                    errores.fotocarnet = 'Por favor verifica que tu archivo sea .jpg o .pdf'
                  }

                  if (!valores.teléfono) {
                    errores.teléfono = 'Ingresa tu teléfono'
                  } else if (!/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/.test(valores.teléfono)) {
                    errores.teléfono = 'Ingresa un teléfono valido'
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

                  if (!valores.nombre_institución) {
                    errores.nombre_institución = 'Campo no puede estar vacio'
                  } else if (!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.nombre_institución)) {
                    errores.nombre_institución = 'Ingresa un nombre'
                  }

                  if (!valores.certificado) {
                    errores.certificado = 'Debes seleccionar un archivo'
                  } else if (!/^.*\.(jpg|JPG)$/.test(valores.certificado)) {
                    errores.certificado = 'Por favor verifica que tu archivo sea .jpg o .pdf'
                  }

                  if (!valores.githubuser) {
                    errores.githubuser = 'Campo no puede estar vacio'
                  } else if (!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.githubuser)) {
                    errores.githubuser = 'Ingresa tu usuario'
                  }
                  else if (!await checkUserGithub(valores.githubuser)) {
                    errores.githubuser = 'Usuario no existe'
                  }
                  return errores;

                }}

                onSubmit={(valores, { resetForm }) => {
                  resetForm();
                  console.log(valores)
                  cambiarFormularioEnviado(true);
                  setTimeout(() => cambiarFormularioEnviado(false), 4000);
                }}

              >
                {({ errors }) => (
                  <Form className="formulario">
                    <h1>Registro para profesionales</h1>
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
                      <label htmlFor="foto del rut">Foto del Rut (solo formato .jpg o .pdf)</label>
                      <Field
                        type="file"
                        name="fotocarnet"
                        id="fotocarnet"
                      />
                      <ErrorMessage name="fotocarnet" component={() => (<div className="error">{errors.fotocarnet}</div>)} />
                    </div>
                    <div>
                      <label htmlFor="teléfono">Teléfono</label>
                      <Field
                        type="tel"
                        name="teléfono"
                        placeholder="Teléfono"
                        id="teléfono"
                      />
                      <ErrorMessage name="teléfono" component={() => (<div className="error">{errors.teléfono}</div>)} />
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
                      <label htmlFor="githubuser"><AiOutlineGithub color="black" size="3em" /></label>
                      <Field
                        type="text"
                        name="githubuser"
                        placeholder="Usuario de Github"
                        id="githubuser"
                      />
                      <ErrorMessage name="githubuser" component={() => (<div className="error">{errors.githubuser}</div>)} />
                    </div>
                    <button type="submit">Enviar</button>
                    {formularioEnviado && <p className="exito"><strong>Formulario enviado exitosamente!</strong></p>}
                  </Form>
                )}
              </Formik>

              <img className="image2" src={img2} />
            </div>
          </div>
        </div>
      </div>
    </>


  );
};
