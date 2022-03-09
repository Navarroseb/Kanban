import React from "react";
import Imagen1 from "../../img/3w.png"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
			<img className="imagen d-flex justify-content-center " src={Imagen1} height="85" width="90" />
			<div className="container py-2">
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="d-flex ms-auto">
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a className="nav-link text-white" aria-current="page" href="#">Cerrar sesion</a>
							</li>
						</ul>

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
										Menu
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
				</div>
			</div>

		</nav>
	);
};
