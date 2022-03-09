import React from "react";
import PropTypes from "prop-types";



const Comment = (props) => {
    return (
        <>
            <div className="container">
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
                                data-bs-target="#exampleModal"
                            >
                                {props.buttonlabel}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">{props.description}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                {props.buttonlabel2}
                            </button>
                        </div>
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