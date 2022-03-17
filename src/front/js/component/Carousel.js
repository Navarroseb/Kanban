import React from "react";
import PropTypes from "prop-types";
import Imagen1 from "../../img/fondos-web.jpg";
import Imagen2 from "../../img/foto2.jpg";
import Imagen3 from "../../img/teclado1.jpg";


const Carousel = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide py-3"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Imagen1} className="d-block w-100 rounded-3" />
                                    <div className="carousel-caption d-none d-md-block text-black">
                                        <h1 className="titulo text-end">{props.title}</h1>
                                        <h5 className="descripcion text-end">{props.description}</h5>
                                        <a href={props.buttonURL} className="btn btn-outline-secondary">
                                            {props.buttonLabel}
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <img src={Imagen2} className="d-block w-100 rounded-3" />
                                    <div className="carousel-caption d-none d-md-block text-black">
                                        <h1 className="titulo text-start">{props.title}</h1>
                                        <h5 className="descripcion text-start">{props.description}</h5>
                                        <a href={props.buttonURL} className="btn btn-outline-secondary">
                                            {props.buttonLabel}
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <img src="https://p4.wallpaperbetter.com/wallpaper/122/85/216/geek-programmer-black-background-wallpaper-preview.jpg" className="d-block w-100 rounded-3" />
                                    <div className="carousel-caption d-none d-md-block text-light">
                                        <h1 className="titulo">{props.title}</h1>
                                        <h5 className="descripcion">{props.description}</h5>
                                        <a href={props.buttonURL} className="btn btn-outline-secondary">
                                            {props.buttonLabel}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Carousel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Carousel;
