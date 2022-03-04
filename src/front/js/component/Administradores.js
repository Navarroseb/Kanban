import React from "react";
import PropTypes from "prop-types";
import Rigo from "../../img/rigo-baby.jpg"

const Administradores = (props) => {
    return (
        <>
            <div className="container">
                <div className="row d-flex m-auto gap-3">
                    <img src={Rigo} className="img-fluid rounded-circle" />
                    <div className="card-body">
                        <h5 className="card-title text-light">{props.title}</h5>
                        <p className="card-text text-light">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

Administradores.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Administradores;
