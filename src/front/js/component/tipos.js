import React from "react";
import PropTypes from "prop-types";
import Desarrollador from "../../img/pc.jpg";
import { Link } from "react-router-dom";

const Tipos = (props) => {
    return (
        <>
            <div className="card-header">
                <div className="card d-flex m-auto gap-3" id="tipos-card">
                    <img src={Desarrollador} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <p className="card-text py-3">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

Tipos.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Tipos;
