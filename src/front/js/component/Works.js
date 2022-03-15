import React from "react";
import PropTypes from "prop-types";
import Codigo from "../../img/lp1.png";
import { FaBriefcase } from "react-icons/fa";


const Work = (props) => {
    return (
        <>
            <div id="cont-profesionales" className="container">
                <div className="work py-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={Codigo} className="img-fluid imgprof" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title text-white text-center">{props.title}</h1>
                                <p className="card-text">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-1s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto kathy</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-2s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto Migue</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-3s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto Seba</a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-4s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22" target="_blank" >Proyecto kao</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Work.propTypes = {
    title: PropTypes.string,
};

export default Work;




