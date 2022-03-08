import React from "react";
import Imagen1 from "../../img/3w.png"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
			<div className="container py-2">
				<a className="navbar-brand " href="#">
					<img className="imagen imagen d-flex align-items-center" src={Imagen1} height="85" width="90" />
				</a>
				<button type="button" className="btn btn-secondary " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
					Iniciar Sesion
				</button>
				<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
					Registrarme
				</button>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="d-flex ms-auto">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Favorites
							</button>
							<ul
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<a className="dropdown-item" href="#">
										Home
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Desarrolladores
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Sobre Nosotros
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Cerrar Sesion
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
