import React from "react";
import PropTypes from "prop-types";
import Rigo from "../../img/rigo-baby.jpg";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaStar, } from "react-icons/fa";
import Imagen1 from "../../img/1w.png"

const Card = (props) => {
    return (
        <> <div id="cont-profesionales" className="container">
            <div id="cprof" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/564x/49/df/07/49df07ffea248dfca6a579e9096fa04f.jpg" className="img-fluid rounded-start px-3 py-5" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{props.title}</h3>
                            <h5 className="card-title py-3">{props.title2}</h5>
                            <p className="card-text">
                                {props.description}
                            </p>
                            <p className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-1s">
                                        <FaEnvelope /> Kao.hurtado22@gmail.com
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-2s">
                                        <FaWhatsapp /> +56988847176
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-3s">
                                        <FaLinkedin /> <a href="https://www.linkedin.com/in/ricardo-hurtado-409035226/" target="_blank" >Ricardo Hurtado</a>
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-4s">
                                        <FaGithub /> <a href="https://github.com/kao-hurtado22" target="_blank" >Ricardo Hurtado (Git Hub)</a>
                                    </li>
                                </ul>
                            </p>
                            <div className="container-fluid">
                                <h5 className="card-title">{props.title3}</h5>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1"
                                >
                                    {props.buttonLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="imagen" src={Imagen1} height="auto" width="70" />
                        </div>
                        <div className="modal-body px-5 bg-secondary text-white">{props.description2}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    title4: PropTypes.string,
    title5: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLabel2: PropTypes.string,
};

export default Card;




