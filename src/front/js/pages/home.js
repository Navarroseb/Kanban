import React from "react";
import "../../styles/home.css";
import Card from "../component/Cards";
import Carousel from "../component/Carousel";
import Administradores from "../component/Administradores";
import Informacion from "../component/Informacion";
import "../../styles/Admin.css";
import Visitas from "../component/Visitas";

export const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Carousel
							title="Titulo"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
							buttonLabel="Learn More"
						/>
					</div>
				</div>
			</div>
			<div className="container" id="container-card" >
				<div className="row">
					<div className="col-md-4" id="card-1">
						<Card
							title="Desarrollador FullStack"
							description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
						/>
					</div>
					<div className="col-md-4" id="card-2">
						<Card
							title="Front-End"
							description="Frontend es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de diseño y desarrollo web que corren en el navegador y que se encargan de la interactividad con los usuarios. Los desarrolladores frontend son aquellos que crean los componentes visuales de un sitio web. Dan formato a las imágenes, la animación y la interactividad de un sitio web."
						/>
					</div>
					<div className="col-md-4" id="card-3">
						<Card
							title="Back-End"
							description="Backend es la capa de acceso a datos de un software o cualquier dispositivo, que no es directamente accesible por los usuarios. Además, contiene la lógica de la aplicación que maneja dichos datos. El Backend también accede al servidor, que es una aplicación especializada que entiende la forma en la que el navegador hace solicitudes. Los desarrolladores backend se encargan de hacer que la lógica del sitio funcione correctamente, la información se transmita de manera segura y el desempeño de la aplicación no entorpezca la experiencia del usuario."
						/>
					</div>
					<div className="col-md-4" id="card-4">
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
			<div className="container">
				<Informacion
					title="¿Que es un Programador Freelancer?"
					description="Un programador freelance es aquella persona que se dedica en su totalidad de tiempo a desarrollar programas o software para autónomos, empresas o particulares.
					Estos perfiles, suelen estar dados de alta como autónomos para así poder tener su propia facturación y correr a cargo de sus gastos e ingresos.
					Por ello, un freelance programador es una persona totalmente independiente y trabaja para sí mismo.
					Dentro de los diferentes tipos de perfiles que existen en la actualidad, el de programador informático freelance es uno que despunta. Puede aportar conocimientos informáticos y a la vez poder programar un software.
					"
				/>
			</div>


			<div className="container" id="admin">
				<div className="row">
					<div className="col-md-3" id="cuadro-1">
						<Administradores
							title="Nombre del Administrador"
							description="Descripcion del Administrador"
						/>
					</div>
					<div className="col-md-3" id="cuadro-2">
						<Administradores
							title="Nombre del Administrador"
							description="Descripcion del Administrador"
						/>
					</div>
					<div className="col-md-3" id="cuadro-3">
						<Administradores
							title="Nombre del Administrador"
							description="Descripcion del Administrador"
						/>
					</div>
					<div className="col-md-3" id="cuadro-4">
						<Administradores
							title="Nombre del Administrador"
							description="Descripcion del Administrador"
						/>
					</div>
				</div>
			</div>

			<Visitas />

		</>
	);
};

export default Home;
