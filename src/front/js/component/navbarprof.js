import React from "react";
import logo from "../../img/w4u1.png"
const Navbarprof = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href={"/home"}>
                    <img id="logo-nav" src={logo} alt="" width="150" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul id="login-nav" class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white iniciar-sesion" href={"/login"}>Login</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Registro
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item disabled" href={"/formularioprofesionales"} >Soy desarrollador</a></li>
                                <li><a class="dropdown-item" href={"/formularioclientes"}>Quiero contratar a un desarrollador</a></li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bars"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href={"/vistadesarrolladores"}  >Ver desarrolladores</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
export default Navbarprof; 