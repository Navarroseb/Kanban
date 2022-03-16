import React from "react";
import PropTypes from "prop-types";



const Comment = (props) => {
    return (
        <>
            <div id="cont-profesionales" className="container">
                <div className="row">
                    <h1 className="titulo text-white text-center">{props.title}</h1>
                    <div className="col-md-12 py-1">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Ingresa tu Comentario"
                                id="floatingTextarea2"
                                style={{ width: 1050 }}
                                defaultValue={""}
                            />
                            <label htmlFor="floatingTextarea2">Ingresa tu Comentario</label>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto py-3">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal2"
                            >
                                {props.buttonlabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade2"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                        </div>
                        <div className="modal-body px-5 bg-secondary text-white">{props.description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
Comment.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonlabel: PropTypes.string,
    buttonlabel2: PropTypes.string

}
export default Comment;