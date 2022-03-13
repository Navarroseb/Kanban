import React from "react";
import PropTypes from "prop-types";
import Desarrollador from "../../img/pc.jpg";
import { Link } from "react-router-dom";

const Tipos = (props) => {
    return (
        <>
            <div className="container">
                <div className="box" id="tipos-card">
                    <div className="card-body">
                        <img src={props.img} className="card-img-top img-card" alt="..." />
                        <h5 className="card-title text-center pt-3">{props.title}</h5>
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
    img: PropTypes.string,
};

export default Tipos;
