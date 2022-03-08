import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div id="vista_cliente" className="card">
                        <div className="card-body" >
                            <div className="row">
                                <div className="col-md-5" id="foto_cliente">
                                    <img src={props.cardImgcliente} className="rounded-circle mb-2" width="200" height="200"></img>
                                </div>
                                <div className="col-md-7" id="info_cliente">
                                    <h5 className="card-title">(Aquí van las estrellas)</h5>
                                    <h5 className="card-title">{props.cardNombrecliente}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"> {props.cardEmailcliente}</h6>
                                    <p className="card-text">{props.cardEmpresacliente}</p>
                                    <a href="#" className="card-link">{props.cardPaginawebcliente}</a>
                                </div></div>
                        </div>
                    </div></div>
                <div className="col-md-3"></div>
            </div></div>
    );
};
Card.propTypes = {
    cardImgcliente: PropTypes.string,
    cardNombrecliente: PropTypes.string,
    cardEmailcliente: PropTypes.string,
    cardEmpresacliente: PropTypes.string,
    cardPaginawebcliente: PropTypes.string,
}

export default Card;