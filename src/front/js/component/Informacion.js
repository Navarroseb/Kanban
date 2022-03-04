import React from "react";
import PropTypes from "prop-types";
import Imagen4 from "../../img/lenguaje.jpg";

const Informacion = (props) => {
    return (
        <>
            <div className="container">
                <img src={Imagen4} className="img-fluid pb-5" width="50%" height="auto" />
                <div className="card-body">
                    <h1 className="card-title text-light">{props.title}</h1>
                    <p className="card-text text-light">{props.description}</p>
                </div>
            </div>
        </>
    );
};

Informacion.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Informacion;
