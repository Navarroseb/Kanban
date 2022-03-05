import React from "react";
import PropTypes from "prop-types";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
			<div className="container py-2">
				<a className="navbar-brand " href="#">
					<img className="" src="" height="" width="" />
				</a>
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
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a className="nav-link text-white" aria-current="page" href="#">Cerrar sesion</a>
							</li>
						</ul>

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
