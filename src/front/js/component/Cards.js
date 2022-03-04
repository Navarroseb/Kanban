import React from "react";
import PropTypes from "prop-types";
import Desarrollador from "../../img/pc.jpg";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card-header">
                <div className="card d-flex m-auto gap-3">
                    <img src={Desarrollador} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
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
