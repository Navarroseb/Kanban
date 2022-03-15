import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Breadcrum from "../component/Breadcrum";
import Card from "../component/Cards";
import Service from "../component/Service";
import Work from "../component/Works";
import Comment from "../component/Comment";
import Navbar2 from "../component/navbar2"



export const Home1 = () => {
	let styles = {
		background: "url(/img/hh.png)",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		width: "100%",
	}
	return (
		<>
			<Navbar2 />
			<div className="fondo-vistaprofesionales" style={styles}>
				<section id="header">
					<div id="cont-profesionales" className="container">
						<div className="row">
							<div className="col-md-12 py-5">
								<Card
									title="Ricardo Hurtado Lastra"
									title2="Biografia"
									title3="Deja tu clasificación"
									buttonLabel="Calificar"
									description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
									description2="Muchas gracias por calificar a nuestro Profesional"
								/>
							</div>
						</div>
					</div>
				</section>
				<section id="servicios">
					<div id="cont-profesionales" className="container">
						<div className="row">
							<div className="col-md-6" id="service-1">
								<Service
									title="Servicios"
									description="Personalización del diseño"
									description2="Carga de contenido"
									description3="Diseño de respuesta"
									description4="Incluir código fuente"
									description5=""
								/>
							</div>
							<div className="col-md-6" id="service-2">
								<Service
									title="Experiencia"
									description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"


								/>
							</div>
							<div className="col-md-6" id="service-3">
								<Service
									title="Mis Habilidades"
									description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
								/>
							</div>
							<div className="col-md-6" id="service-4">
								<Service
									title="Mis Portafolios"
									description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
								/>
							</div>
						</div>
					</div>
				</section>
				<section id="mis-trabajos">
					<div id="cont-profesionales" className="container">
						<Work
							title="Mis Trabajos"
						/>
					</div>
				</section>
				<section id="comentarios">
					<div className="container-comment">
						<Comment
							title="Dejame tu comentario"
							description="Gracias por dejarnos tu comentario."
							buttonlabel="Enviar comentario"
						/>
					</div>
				</section></div>
		</>
	);
};
