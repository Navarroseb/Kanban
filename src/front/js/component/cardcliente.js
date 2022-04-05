import PropTypes from "prop-types";
import React from "react";

const Cardcliente = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div id="vista_cliente" className="box">
                        <div id="card-body5" className="card-body" >
                            <div className="row">
                                <div className="col-md-5" id="foto_cliente">
                                    <img src="https://cf.ltkcdn.net/adultos-mayores/images/orig/215518-1280x1600-calvo.jpg" className="rounded-circle mb-2" width="200" height="200"></img>
                                </div>
                                <div className="col-md-7" id="info_cliente">
                                    <h5 className="card-title"></h5>
                                    <h2 className="card-title text-center text-white"><b>José Antonio Peréz</b></h2>
                                    <h6 className="card-subtitle mb-2 text-muted text-center text-primary"> japerez@develperslabs.com </h6>
                                    <p className="card-text text-center text-white"><b>Empresa: Developer Labs</b></p>
                                    <a href="http://www.google.com" className="card-link5"> Developer-Labs</a>
                                </div></div>
                        </div>
                    </div></div>
                <div className="col-md-3"></div>
            </div></div>
    );
};
Cardcliente.propTypes = {
    cardImgcliente: PropTypes.string,
    cardNombrecliente: PropTypes.string,
    cardEmailcliente: PropTypes.string,
    cardEmpresacliente: PropTypes.string,
    cardPaginawebcliente: PropTypes.string,
}

export default Cardcliente;