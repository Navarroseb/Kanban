import React from "react";
const Buscador = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div id="buscador_completo" className="col-md-8 mt-5">
                    <div className="input-group mb-3">
                        <select id="buscador_categoria" className="form-select" aria-label="">
                            <option selected disabled>Especialidad</option>
                            <option value="1">Frontend</option>
                            <option value="2">Backend</option>
                            <option value="3">Fullstack</option>
                        </select>
                        <input id="buscador_ciudad" type="text" className="fas fa-map-marker-alt form-control" placeholder="&#xf3c5; Ciudad" aria-label="Recipient's username" aria-describedby="button-addon2" />

                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};



export default Buscador;