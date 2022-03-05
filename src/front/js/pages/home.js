import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Breadcrum from "../../../../src/front/js/component/Breadcrum";
import Perfil from "../../../../src/front/js/component/Perfil";



export const Home = () => {
	return (
		<>
			<div className="">
				<Breadcrum />
			</div>
			<div className="container-fluid">
				<Perfil
					title="Titulo"
					description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					description2="Last updated 3 mins ago"
					buttonLabel="Learn More"
				/>
			</div>

		</>

	);
};
