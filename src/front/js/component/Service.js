import React from "react";
import PropTypes from "prop-types";



const Service = (props) => {
    return (
        <>
            <div className="card-header">
                <div className="card d-flex m-auto gap-3">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

Service.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Service;
