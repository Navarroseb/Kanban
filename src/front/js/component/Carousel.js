import React from "react";
import PropTypes from "prop-types";



const Carousel = (props) => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={props.imgbanner1} class="d-block w-100" alt="..." />
                        <div className="carousel-caption cc1 d-none d-md-block text-white d-flex flex-column justify-content-center align-items-start px-5">
                            <h2 className="titulo mx-5 w-50">{props.title1}</h2>
                            <a class="btn btn-outline-light bc1" href={"/vistadesarrolladores"} role="button">{props.buttonLabel1}</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={props.imgbanner2} class="d-block w-100" alt="..." />
                        <div className="carousel-caption cc2 d-none d-md-block text-white d-flex flex-column justify-content-center align-items-end px-5">
                            <h2 className="titulo mx-5">{props.title2}</h2>
                            <a class="btn btn-outline-light bc2" href="#desarrollador-junior" role="button">{props.buttonLabel2}</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={props.imgbanner3} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    );
};

Carousel.propTypes = {
    title1: PropTypes.string,
    buttonLabel1: PropTypes.string,
    imgbanner1: PropTypes.string,
    imgbanner2: PropTypes.string,
    title2: PropTypes.string,
    buttonLabel2: PropTypes.string,
    imgbanner3: PropTypes.string,
};

export default Carousel;
