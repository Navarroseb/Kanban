import React from "react";
import PropTypes from "prop-types";



const Service = (props) => {
    return (
        <>

            <div id="cprof" className="card d-flex mx-3 my-3 gap-3">
                <div className="card-body text-center">
                    <h3 className="card-title bg-secondary text-white">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.description2}</p>
                    <p className="card-text">{props.description3}</p>
                    <p className="card-text">{props.description4}</p>
                    <p className="card-text">{props.description5}</p>
                </div>
            </div>

        </>
    );
};

Service.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string,
    description4: PropTypes.string,
    description5: PropTypes.string,
};

export default Service;
