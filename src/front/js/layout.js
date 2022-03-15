import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home1 } from "./pages/home1";
import { Home2 } from "./pages/home2";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import { Footer } from "./component/footer";
import { RegistroProfesionales } from "./pages/registroprofesionales";
import { RegistroClientes } from "./pages/registroclientes";
import { Home } from "./pages/home";
import { Vistacliente } from "./pages/vistacliente";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>

					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/home">
							<Home2 /></Route>
						<Route exact path="/vistadesarrolladores">
							<Home />
						</Route>
						<Route exact path="/perfildesarrolladores">
							<Home1 /> </Route>

						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/vistacliente">
							<Vistacliente />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/formularioprofesionales">
							<RegistroProfesionales />
						</Route>
						<Route exact path="/formularioclientes">
							<RegistroClientes />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
