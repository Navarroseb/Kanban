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
		background: "url(/img/pexprof.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		width: "100%",
	}
	return (
		<>
			<Navbar2 />
			<div className="fondo-vistaprofesionales" style={styles}  >
				<section id="header">
					<div id="cont-profesionales" className="container">
						<div className="row">
							<div className="col-md-12 py-5">
								<Card
									title="Ricardo Hurtado Lastra"
									title2="Biografia"
									title3="Deja tu clasificación"
									buttonLabel="Calificar"
									description="Soy un joven apasionado y entusiasta, en un nuevo mundo, en el cual estoy experimentando, ademas creer en las mejores prácticas y tendencias modernas en desarrollo web.    El diseño de su sitio, es lo primero que ven sus clientes. Es por eso que diseño sitios que reflejan tu estilo de negocio. "
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
									description=" - Personalización del diseño"
									description2="- Carga de contenido"
									description3="- Diseño de respuesta"
									description4="- Incluir código fuente"
									description5=""
								/>
							</div>
							<div className="col-md-6" id="service-2">
								<Service
									title="Experiencia"
									description="Al ser FREELANCE he Asistido y contribuido con conocimientos de programación, a reuniones de desarrollo de empresa (PYMES). Esto es muy importante para la empresa (PYMES), ya qué como Programador Junior sere quién pueda dar opiniones sobre por ejemplo cuanto factible es implementar ciertos cambios o mejoras en los aspectos de la empresa que impliquen programación"


								/>
							</div>
							<div className="col-md-6" id="service-3">
								<Service
									title="Mis Habilidades"
									description="Al ser un joven que se puede adaptar al cambio de manera facil y a su ves ser creativo, tendras una productividad que vale por dos, y la razón es muy sencilla, los reclutadores siempre buscan aquellos trabajadores que quieran innovar y sean sagaces en lo que hacen, permitiendo que la empresa siempre se destaque y marque la diferencia ante la competencia."
								/>
							</div>
							<div className="col-md-6" id="service-4">
								<Service
									title="Principales razones para contratarme"
									description="Si eres emprendedor y tienes un pyme, te daras cuenta que no puedes cubrir todas las areas, tanto de produccion y tecnologia de tu negocio, lo cual podrian estar funcionando las 24 horas del dia, este sería también un factor importante para pensar como pyme de como puedo mejorar mas mi negocio, por eso yo te puedo ayudar con aplicaciones necesarias para tu negocio. Quizás la falta de tiempo, la familia, los estudios y otras actividades puedan influir en no desarrollar bien el éxito de tu empresa. "
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
						{/* <Comment
							title="Dejame tu comentario"
							description="Gracias por dejarnos tu comentario."
							buttonlabel="Enviar comentario"
						/> */}
					</div>
				</section></div>
		</>
	);
};
