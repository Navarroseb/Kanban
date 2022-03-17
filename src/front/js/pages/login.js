import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* import contraseña from "../../img/contraseña.jpg";
import mail from "../../img/mail-logo.png"; */
import profile from "../../img/1w.png";
import "./../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbarlogin from "../component/navbarlogin";
export const Login = () => {
    const { store, actions } = useContext(Context);
    let styles = {
        background: "url(/img/pexel.jpg)",
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
                                initialValues={{ password: "", email: "" }}
                                validationSchema={Yup.object({
                                    password: Yup.string()
                                        .max(15, "Must be 15 characters or less")
                                        .required("Required"),
                                    email: Yup.string()
                                        .email("Invalid email address")
                                        .required("Required"),
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        //alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                    actions.login(values.email, values.password);
                                }}
                            >
                                <Form>
                                    <div>
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <Field name="email" type="email" />
                                    <ErrorMessage name="email" />
                                    <div>
                                        <label htmlFor="password">password</label>
                                    </div>
                                    <Field name="password" type="password" />
                                    <ErrorMessage name="password" />
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div></>
    );
};
