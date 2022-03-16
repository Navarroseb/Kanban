import React from "react";
import PropTypes from "prop-types";

const Info2 = (props) => {
    let styles = {
        background: "url(/img/p2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "400px",
        width: "100%",
    }
    return (
        <>
            <div id="banner" className="container-fluid" style={styles}>
                <div className="row">


                    <div className="col-md-12 d-flex justify-content-center px-5 baninfo">
                        <h1 className="textojunior text-white">{props.titulo}</h1></div>

                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center"></div>
                </div>
                <h4 className="bantexto">{props.descrip}</h4>
            </div>

        </>
    );
};

Info2.propTypes = {
    titulo: PropTypes.string,
    descrip: PropTypes.string,
};
export default Info2;