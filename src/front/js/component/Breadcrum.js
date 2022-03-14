import React from "react";

const Breadcrum = () => {
    return (
        <>
            <div id="cont-profesionales" className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active text-white" aria-current="page">Perfil Profesional</li>
                    </ol>
                </nav>
            </div>
        </>
    );
};

export default Breadcrum;