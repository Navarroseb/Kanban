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
			{/* <div className="fondobusqueda">
				<Buscador
					buscadorEspecialidad="Especialidad"
					buscadorFront="Frontend"
					buscadorBack="Backend"
					buscadorFull="Fullstack"
				/></div> */}
			<div className="container">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-3">
								<Card
									id="card-profesional"
									cardImg="https://i.pinimg.com/564x/49/df/07/49df07ffea248dfca6a579e9096fa04f.jpg"
									cardNombredesarrollador="Ricardo Hurtado"
									cardEspecialidad="FullStack (Junior)"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/23658568_1421938677874364_8427611589418782732_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHYXKb5pbktA4PawPHFwCTe88CRfJ7TslnzwJF8ntOyWTYoFWgu-gOKKkjmI20cmo4&_nc_ohc=GdRxz8qsgooAX8xFbbn&_nc_ht=scontent-scl2-1.xx&oh=00_AT-dDeOdBzHFMr791fledvdaMMnFVma-HqLTam6Hk61Kww&oe=6271F6DD"
									cardNombredesarrollador="Javiera Figueroa"
									cardEspecialidad="Fullstack"
									cardCalificacion="3.1(21 Opiniones)"
									cardCiudad="Santiago"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://shangay.com/sites/default/files/tumblr_nj9n10LlRh1qamfowo1_r1_500.png"
									cardNombredesarrollador="Leonel Arguello"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.5(23 Opiniones)"
									cardCiudad="Santiago, Chile."
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://fotocreativo.com/wp-content/uploads/2019/09/ecf3db173fea15839fdfe0625b25bfec.jpg"
									cardNombredesarrollador="Felipe Contreras"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.8(28 Opiniones)"
									cardCiudad="Santiago, Chile"
									cardBoton="Ver perfil"
								/>
							</div>


						</div>
						<div className="row">
							<div className="col-md-3">
								<Card
									cardImg="https://shangay.com/sites/default/files/11.JPG"
									cardNombredesarrollador="Javier Rodriguez"
									cardEspecialidad="Fullstack"
									cardCalificacion="4.2(18 Opiniones)"
									cardCiudad="Santiago, Chile."
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://p4.wallpaperbetter.com/wallpaper/707/371/711/women-brunette-model-face-portrait-wallpaper-preview.jpg"
									cardNombredesarrollador="Agustina Lopez"
									cardEspecialidad="Fullstack"
									cardCalificacion="3.7(12 Opiniones)"
									cardCiudad="Santiago, Chile"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://media.vogue.es/photos/5cc73b7cf3fa8c35ea7a4d7c/master/w_1600,c_limit/mejores_modelos_masculinos_mas_famosos_sean_o_pry_1801.jpg"
									cardNombredesarrollador="Roberto Padilla"
									cardEspecialidad="Fullstack"
									cardCalificacion="2.8(15 Opiniones)"
									cardCiudad="Santiago, Chile"
									cardBoton="Ver perfil"
								/>
							</div>
							<div className="col-md-3">
								<Card
									cardImg="https://elcomercio.pe/resizer/WXbIppdKRnArOKazexyfCbFrF5k=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2NK6BUHNIVES3IWFUCEZHVHMNY.jpg"
									cardNombredesarrollador="Natalia Guzman"
									cardEspecialidad="Fullstack"
									cardCalificacion="2.0(8 Opiniones)"
									cardCiudad="Santiago, Chile"
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
