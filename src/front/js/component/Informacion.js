import React from "react";
import PropTypes from "prop-types";

const Informacion = () => {
    let styles = {
        background: "url(../../img/fondodj.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "750px",
        width: "100%",
    }
    return (
        <>
            <div id="banner" className="container-fluid" >
                <div className="row">


                    <div className="col-md-12 d-flex flex-column justify-content-center px-5" style={styles}>
                        <h1 className="textojunior">Que es un desarrollador junior?</h1>
                    </div>

                </div>
            </div>
            {/* <div className="container">
                <div className="jumbotron">
                    <img src="https://i.imgur.com/zl9o3Yx.jpeg" className="img py-5 img Rounded" alt="..." />
                    <hr className="my-4 bg-white" />
                    <h1 className="display-4 text-center">{props.title}</h1>
                    <p className="lead">
                        {props.description}
                    </p>
                    <hr className="my-4 bg-white" />
                </div>
            </div> */}
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