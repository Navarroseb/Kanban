import PropTypes from "prop-types";
import React from "react";
const Buscador = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div id="buscador_completo" className="col-md-8 mt-5">
                    <div className="input-group mb-3">
                        <select id="buscador_categoria" className="form-select" aria-label="">
                            <option selected disabled>{props.buscadorEspecialidad}</option>
                            <option value="1">{props.buscadorFront}</option>
                            <option value="2">{props.buscadorBack}</option>
                            <option value="3">{props.buscadorFull}</option>
                        </select>
                        <input id="buscador_ciudad" type="text" className="fas fa-map-marker-alt form-control" placeholder="&#xf3c5; Ciudad" aria-label="Recipient's username" aria-describedby="button-addon2" />

                        <button className="btn text-white" type="button" id="button-buscador"><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};
Buscador.PropTypes = {
    buscadorEspecialidad: PropTypes.string,
    buscadorFront: PropTypes.string,
    buscadorBack: PropTypes.string,
    buscadorFull: PropTypes.string,


}



export default Buscador;