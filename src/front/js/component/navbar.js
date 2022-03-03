import React from "react";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img className="img-fluid" src="" height="" width="" />
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
						<a href="#" class="btn btn-secondary my-5">Inicio Sesion</a>
						<a href="#" class="btn btn-secondary my-5">Registrarme</a>
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
								className="dropdown-menu dropdown-menu-end"
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
