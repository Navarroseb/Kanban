import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
import Buscador from "../component/buscador.js";
import Paginas from "../component/paginas.js"
import "../../styles/home.css";
import Navbar2 from "../component/navbar2"

export const Home = () => {
	return (
		<>
			<Navbar2 />

			{/* <div className="container "> */}
			<div className="fondobusqueda">
				<Buscador
					buscadorEspecialidad="Especialidad"
					buscadorFront="Frontend"
					buscadorBack="Backend"
					buscadorFull="Fullstack"
				/></div>
			<div className="container">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>


						</div>
						<div className="row">
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>


						</div>
						<div className="row">
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://images.pexels.com/photos/9977570/pexels-photo-9977570.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									cardNombredesarrollador="John Doe"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>


						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</div>
			<Paginas />
			{/* </div> */}
		</>
	);
};
