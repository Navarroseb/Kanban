import React from "react";
import PropTypes from "prop-types";



const Banner = () => {
    let styles = {
        background: "url(/img/login.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "750px",
        width: "100%",
    }

    return (

        <div id="banner" className="container-fluid" >
            <div className="row">


                <div className="col-md-12 text-white d-flex flex-column justify-content-center align-items-start px-5" style={styles}>
                    <h1 className="w-50 ">ENCUENTRA A LOS MEJORES DESARROLLADORES JUNIOR PARA TU PROYECTO</h1>
                    <button className="btn btn-primary px-5 py-2">hola</button>
                </div>





            </div>
        </div>)
}





export default Banner;