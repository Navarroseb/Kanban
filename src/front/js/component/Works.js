import React from "react";
import PropTypes from "prop-types";
import imgworks from "../../img/t1.png";
import { FaBriefcase } from "react-icons/fa";


const Work = (props) => {
    return (
        <>
            <div id="cont-profesionales" className="container">
                <div className="work py-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={imgworks} className="img-fluid imgprof" alt="..." />
                        </div>
                        <div className="col-md-6 cbw">
                            <div className="card-body ">
                                <h1 className="card-title text-white text-center">{props.title}</h1>
                                <p className="card-text">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-1s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22/Music-Player-React" target="_blank" ><b>Proyecto Music Player</b></a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-2s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22/TicTacToe-With-React" target="_blank" ><b>Proyecto Tic Tac Toe</b></a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-3s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22/todo-list-react" target="_blank" ><b>Proyecto ToDo List</b></a>
                                        </li>
                                        <li className="list-group-item list-group-item-action animate__animated animate__pulse animate__delay-4s">
                                            <FaBriefcase /> <a href="https://github.com/kao-hurtado22/Sorting-Cards" target="_blank" ><b>Proyecto Sorting Cards</b></a>
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




