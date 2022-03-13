import React from "react";
import logo from "../../img/w4u1.png"
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href={"/home"}>
					<img src={logo} alt="" width="150" />
				</a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link text-white iniciar-sesion" href="#">Login</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Registro
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a class="dropdown-item" href={"/formularioprofesionales"}>Soy desarrollador</a></li>
								<li><a class="dropdown-item" href={"/formularioclientes"}>Quiero contratar a un desarrollador</a></li>

							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="fas fa-bars"></i>
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a class="dropdown-item" href={"/vistadesarrolladores"}>Ver desarrolladores</a></li>
								<li><a class="dropdown-item" href="#aboutus">About us</a></li>
								<li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};
export default Navbar; 