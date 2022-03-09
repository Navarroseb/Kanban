import React from "react";
import PropTypes from "prop-types";


const Administradores = (props) => {
    return (
        <>
            <div className="container">
                <div className="card mb-3 bg-black py-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://horizonterm.blob.core.windows.net.optimalcdn.com/images/2022/02/24/anonymus-rusia-focus-0-0-955-636.jpg" className="img-fluid px-5" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title text-center">{props.title}</h3>
                                <h5 className="card-title py-1">{props.title2}</h5>
                                <p className="card-text">
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

Administradores.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Administradores;
