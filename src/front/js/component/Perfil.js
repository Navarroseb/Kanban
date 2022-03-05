import React from "react";
import PropTypes from "prop-types";
import Rigo from "../../img/rigo-baby.jpg";

const Perfil = (props) => {
    return (
        <>
            <div className="Container">
                <div className="card">
                    <div className="card mb-3" style="max-width: 540px;">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Rigo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">{description2}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

perfil.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    buttonLabel: PropTypes.string,
};

export default Perfil;
