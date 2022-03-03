import React from "react";
import PropTypes from "prop-types";
import Lenguaje from "../../img/lenguaje.jpg";
/* import { AiFillHeart } from 'react-icons/ai'; */
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card py-5">
                <div className="card d-flex m-auto gap-3 animate__animated animate__zoomIn">
                    <img src={Lenguaje} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        {/* <Link to="/details">
                            <a href={props.buttonURL} className="btn btn-outline-primary">
                                {props.buttonLabel}
                            </a>
                        </Link> */}
                        {/*  <div className="d-grid gap-2 d-flex justify-content-md-end">
                            <button
                                className="btn btn-outline-warning me-md-2"
                                className="btn btn-outline-warning me-md-2 "
                                type=""
                            ><AiFillHeart /></button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Card;
