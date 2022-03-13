import React from "react";
import PropTypes from "prop-types";

const Administradores = (props) => {
    return (
        <>
            <div className="nosotros-item mx-auto mv-5">
                <img className="img-fluid rounded-circle mb-3 fotous" width="180" height="180" src={props.img}></img>
                <h5>{props.nombre}</h5>
                <p className="font-weight-light mb-0"> {props.descripcion}</p>
            </div>
            {/*  <section className="Nosotros text-center">
                <div className="container">
                    <h2 className="mb-5">Sobre nosotros...</h2>
                    <div className="row">
                        <div className="col-3">
                            <div className="nosotros-item mx-auto mv-5">
                                <img className="img-fluid rounded-circle mb-3 fotous" src={foto}></img>
                                <h5>Katherine Kraushaar</h5>
                                <p className="font-weight-light mb-0"> Desarrolladora Junior Fullstack</p>
                            </div></div>
                        <div className="col-3"> <div className="nosotros-item mx-auto mv-5">
                            <img className="img-fluid rounded-circle mb-3 fotous" src={foto}></img>
                            <h5>Katherine Kraushaar</h5>
                            <p className="font-weight-light mb-0"> Desarrolladora Junior Fullstack</p>
                        </div></div>
                        <div className="col-3"> <div className="nosotros-item mx-auto mv-5">
                            <img className="img-fluid rounded-circle mb-3 fotous" src={foto}></img>
                            <h5>Katherine Kraushaar</h5>
                            <p className="font-weight-light mb-0"> Desarrolladora Junior Fullstack</p>
                        </div></div>
                        <div className="col-3"> <div className="nosotros-item mx-auto mv-5">
                            <img className="img-fluid rounded-circle mb-3 fotous" src={foto}></img>
                            <h5>Katherine Kraushaar</h5>
                            <p className="font-weight-light mb-0"> Desarrolladora Junior Fullstack</p>
                        </div></div>

                    </div></div>

            </section> */}

            {/* <div className="container">
                <div id="cartaadm" className="box mb-3 py-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.imgadm} className="rounded-circle m-4" width="200" height="200" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title text-center">{props.title}</h3>
                                <h5 className="card-title py-1">{props.title2}</h5>
                                <p className="card-text">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

Administradores.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    img: PropTypes.string,

};

export default Administradores;
