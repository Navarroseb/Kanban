import React from "react";
import PropTypes from "prop-types";
import Imagen4 from "../../img/lenguaje.jpg";

const Informacion = (props) => {
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.imgur.com/zl9o3Yx.jpeg" className="img-fluid py-5" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title text-center">{props.title}</h3>
                                <p className="card-text py-5">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Informacion.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Informacion;
