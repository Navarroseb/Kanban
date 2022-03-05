import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
import Buscador from "../component/buscador.js";
import Paginas from "../component/paginas.js"
import "../../styles/home.css";

export const Home = () => {
	return (
		<>
			<div className="container ">
				<Buscador />
				<Card />
				<Paginas />
			</div>
		</>
	);
};
