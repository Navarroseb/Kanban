import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cardcliente from "../component/cardcliente.js";
import "../../styles/home.css";
import Navbar2 from "../component/navbar2"

export const Vistacliente = () => {

    return (
        <>
            <Navbar2 />
            <Cardcliente
                cardImgcliente="https://images.pexels.com/photos/8742880/pexels-photo-8742880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                cardNombrecliente="Juanito Pérez"
                cardEmailcliente="juanitoperez@gmail.com	"
                cardEmpresacliente="Nombre empresa E.I.R.L"
                cardPaginawebcliente="pagina opcional"
            />
        </>
    );
};