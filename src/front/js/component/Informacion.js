import React from "react";
import PropTypes from "prop-types";
import Imagen4 from "../../img/lenguaje.jpg";

const Informacion = (props) => {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <img src="https://i.imgur.com/zl9o3Yx.jpeg" className="img py-5 img Rounded" alt="..." />
                    <hr className="my-4 bg-white" />
                    <h1 className="display-4 text-center">{props.title}</h1>
                    <p className="lead">
                        {props.description}
                    </p>
                    <hr className="my-4 bg-white" />
                </div>
            </div>
        </>
    );
};

Informacion.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Informacion;


{/* <div className="container">
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://i.imgur.com/zl9o3Yx.jpeg" className="img-fluid py-5" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title text-center"></h3>
                    <p className="card-text py-5">
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</div> */}