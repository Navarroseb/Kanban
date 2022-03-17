import React from "react";
import Imagen1 from "../../img/3w.png"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
			<img id="logonavbar" className="imagen " src={Imagen1} height="85" width="90" />
			<button id="iniciarsesion" type="button" class="btn btn-outline-secondary">Iniciar Sesión</button>
			<div id="registro" class="dropdown">
				<a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Registrarme
				</a>

				<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><a class="dropdown-item" href={"/formularioprofesionales"}>Soy desarrollador</a></li>
					<li><a class="dropdown-item" href={"/formularioclientes"}>Quiero contratar a un desarrollador</a></li>
				</ul>
			</div>
			<div className="container py-2">
				<a className="navbar-brand " href="#">
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
						<div className="dropdown">
							<button
								className="btn btn-outline-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Menu
							</button>
							<ul
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<a className="dropdown-item" href={"/home"}>
										Home
									</a>
								</li>
								<li>
									<a className="dropdown-item" href={"/vistadesarrolladores"}>
										Profesionales
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Administradores
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
