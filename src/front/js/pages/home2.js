import React from "react";
import "../../styles/home.css";
import Tipos from "../component/tipos";
import Carousel from "../component/Carousel";
import Administradores from "../component/Administradores";
import Informacion from "../component/Informacion";
import "../../styles/Admin.css";
import ImgFront from "../../img/frontv1.png";
import ImgBack from "../../img/backv1.png";
import ImgFull from "../../img/full.png";
import Bannerhome from "../../img/bannerlisto.png"
import Banner2 from "../../img/bannerhome2.png"
import Banner3 from "../../img/bannerhome3.png"
import fotokt from "../../img/kt1.png"
import fotomiguel from "../../img/miguel.jpeg"
import fotokao from "../../img/kao.png"
import fotoseba from "../../img/seba.png"
import Navbar from "../component/navbar"
import { Footer } from "../component/footer.js"



export const Home2 = () => {
	return (
		<>
			<Navbar />
			<div className="container" >
				<div className="row">
					<div className="col-md-12">
						<Carousel
							title1="Encuentra aquí a los mejores desarrolladores junior"
							/* description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" */
							buttonLabel1="Ver  desarrolladores"
							imgbanner1={Bannerhome}
							imgbanner2={Banner2}
							title2="¿Que es un  desarrollador freelance?"
							buttonLabel2="Descubrelo!"
							imgbanner3={Banner3}
						/>
					</div>
				</div>
			</div>


			<div className="container" id="container-tipos" >
				<div className="row" id="tipos">
					<div className="col-md-4 py-3" id="tipo-1">
						<Tipos
							title="Desarrollador FullStack"
							description="Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación"
							img={ImgFull}

						/>
					</div>
					<div className="col-md-4 py-3" id="tipo-2">
						<Tipos
							title="Front-End"
							description="Frontend es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de diseño y desarrollo web que corren en el navegador y que se encargan de la interactividad con los usuarios. Los desarrolladores frontend son aquellos que crean los componentes visuales de un sitio web. Dan formato a las imágenes, la animación y la interactividad de un sitio web."
							img={ImgFront}
						/>
					</div>
					<div className="col-md-4 py-3" id="tipo-3">
						<Tipos
							title="Back-End"
							description="Backend es la capa de acceso a datos de un software o cualquier dispositivo, que no es directamente accesible por los usuarios. Además, contiene la lógica de la aplicación que maneja dichos datos. Los desarrolladores backend se encargan de hacer que la lógica del sitio funcione correctamente y que la información se transmita de manera segura."
							img={ImgBack}
						/>
					</div>
				</div>
			</div>


			<Informacion
				title="QUE ES UN DESARROLLADOR FREELANCE?"
				description="Un programador freelance es aquella persona que se dedica en su totalidad de tiempo a desarrollar programas o software para autónomos, empresas o particulares.
			Estos perfiles, suelen estar dados de alta como autónomos para así poder tener su propia facturación y correr a cargo de sus gastos e ingresos.
			Por ello, un freelance programador es una persona totalmente independiente y trabaja para sí mismo.
			Dentro de los diferentes tipos de perfiles que existen en la actualidad, el de programador informático freelance es uno que despunta. Puede aportar conocimientos informáticos y a la vez poder programar un software."
			/>


			<section className="Nosotros-section text-center" >
				<div id="aboutus" className="container">
					<h2 className="mb-5">Sobre nosotros...</h2>
					<div className="row">
						<div className="col-md-3">
							<Administradores
								nombre="Katherine Kraushaar"
								descripcion="Desarrolladora Junior Fullstack"
								img={fotokt} />

						</div>
						<div className="col-md-3"> <Administradores
							nombre="Miguel Rojas"
							descripcion="Desarrollador Junior Fullstack"
							img={fotomiguel} />
						</div>
						<div className="col-md-3"><Administradores
							nombre="Ricardo Hurtado"
							descripcion="Desarrollador Junior Fullstack"
							img={fotokao} />
						</div>
						<div className="col-md-3"><Administradores
							nombre="Sebastian Navarro"
							descripcion="Desarrollador Junior Fullstack"
							img={fotoseba} />
						</div>

					</div></div>

			</section>

			{/* <section id="body-3">
				<div className="container-fluid">
					<div className="row"> */}

			{/* <div className="col-md-6" id="cuadro-2">
							<Administradores
								title="Miguel Rojas"
								description="Descripcion del Administrador"
								imgadm={Fotomiguel}
							/>
						</div>
						<div className="col-md-6" id="cuadro-3">
							<Administradores
								title="Ricardo Hurtado"
								description="Descripcion del Administrador"
								imgadm={Fotokao}
							/>
						</div>
						<div className="col-md-6" id="cuadro-4">
							<Administradores
								title="Sebastian Navarro"
								description="Descripcion del Administrador"
								imgadm={Fotoseba}
							/>
						</div> */}
			{/* </div>
				</div>
			</section> */}

		</>
	);
};

export default Home2;
