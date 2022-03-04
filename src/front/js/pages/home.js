import React from "react";
import "../../styles/home.css";
import Card from "../component/Cards";
import Carousel from "../component/Carousel";
import Administradores from "../component/Administradores";
import Visitas from "../component/Visitas";

export const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Carousel
							title="Titulo"
							description="Descripcion de imagen"
							buttonLabel="Learn More"
							buttonURL=""
						/>
					</div>
				</div>
			</div>
			<div className="container container-card">
				<div className="row">
					<div className="col-md-4 py-3">
						<Card
							title="Desarrollador FullStack"
							description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
						/>
					</div>
					<div className="col-md-4 py-3">
						<Card
							title="Front-End"
							description="Frontend es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de diseño y desarrollo web que corren en el navegador y que se encargan de la interactividad con los usuarios. Los desarrolladores frontend son aquellos que crean los componentes visuales de un sitio web. Dan formato a las imágenes, la animación y la interactividad de un sitio web."
						/>
					</div>
					<div className="col-md-4 py-3">
						<Card
							title="Back-End"
							description="Backend es la capa de acceso a datos de un software o cualquier dispositivo, que no es directamente accesible por los usuarios. Además, contiene la lógica de la aplicación que maneja dichos datos. El Backend también accede al servidor, que es una aplicación especializada que entiende la forma en la que el navegador hace solicitudes. Los desarrolladores backend se encargan de hacer que la lógica del sitio funcione correctamente, la información se transmita de manera segura y el desempeño de la aplicación no entorpezca la experiencia del usuario."
						/>
					</div>
					<div className="col-md-4 py-3">
						<Card
							title="Mobile Developer"
							description="El Mobile Developer es la persona encargada de la creación, el mantenimiento y la implementación del código fuente que integra las aplicaciones para smartphones y otros dispositivos inteligentes. Además, puede desarrollar aplicaciones web y videojuegos."
						/>
					</div>
					<div className="col-md-4 py-3">
						<Card
							title="Project Management"
							description="El Project Management es quien se dedica a administrar los recursos (humanos, financieros y físicos), hasta que se alcancen los objetivos planteados. El ideal de esta persona es alcanzar las metas propuestas optimizando al máximo todos los recursos durante todas las fases del ciclo de vida del proyecto."
						/>
					</div>
					<div className="col-md-4 py-3">
						<Card
							title="Data Base"
							description="Es un servicio administrado de base de datos relacional de uso general que admite estructuras como datos relacionales, Database ofrece un rendimiento escalable de modo dinámico dentro de dos modelos de compra diferentes: un modelo de compra basado en núcleo virtual y un modelo de compra basado en DTU."
						/>
					</div>
				</div>
			</div>
			<Administradores />
			<Visitas />

		</>
	);
};

export default Home;
