import React from "react";
import PropTypes from "prop-types";
import Codigo from "../../img/codigo.jpg";
import { FaBriefcase } from "react-icons/fa";


const Work = (props) => {
    return (
        <>
            {/*  <div className="container">
                <div className="work mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Codigo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{props.title}</h1>
                                <p className="card-text">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-1s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto kathy</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-2s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto Migue</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-3s">
                                            <FaLinkedin /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto Seba</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-4s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto kao</a>
                                        </li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

Work.propTypes = {
    title: PropTypes.string,
};

export default Work;




