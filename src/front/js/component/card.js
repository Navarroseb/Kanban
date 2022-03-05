import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
    return (

        <div id="card-desarrollador" className="card">
            <div className="card-body text-center">
                <h4 className="card-tittle text-end"><i class="far fa-heart"></i></h4>
                <img src={props.cardImg} className="rounded-circle mb-2" width="100" height="100"></img>
                <h3 className="nombre-desarrollador">{props.cardNombredesarrollador}</h3>
                <p className="especialidad">{props.cardEspecialidad}</p>
                <p className="calificacion"><i class="fas fa-star"></i>{props.cardCalificacion} </p>
                <p className="ciudad desarrollador">{props.cardCiudad}</p>
                <div className="footer-card">
                    <button class="btn btn-primary" type="button">{props.cardBoton}</button>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    cardImg: PropTypes.string,
    cardNombredesarrollador: PropTypes.string,
    cardEspecialidad: PropTypes.string,
    cardCalificacion: PropTypes.string,
    cardCiudad: PropTypes.string,
    cardBoton: PropTypes.string,

};

export default Card;