import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Buscador from "./Buscador";
import BtnIngresar from "./BtnIngresar";
import Movil from "./Movil";

import Menu from "../../assets/icons/Menu.svg";
import LogoEscritorio from "./LogoEscritorio";

const Nav = styled.nav`
  position: relative;
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 0 5px;
  z-index: 15;
  position: relative;
  background-color: #ffffff;
  @media (min-width: 600px) {
    gap: 15px;
    padding: 0 10px;
    background-color: #ffffff;
  }
`;
const Logo_Buscador = styled.div`
  display: flex;
  align-items: center;
  width: 53%;
  justify-content: space-between;
`;
const ButtonDesplegarMenu = styled.div`
  width: 25px;
  height: 25px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
const Router = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    gap: 20px;
    a {
      font-size: 18.5px;
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Navegacion = () => {
  const [menu, setMenu] = useState(false);

  // Cerrar al hacer click fuera useEffect

  return (
    <>
      <Nav>
        <Contenedor>
          <Logo_Buscador>
            <LogoEscritorio />
            <Buscador />
          </Logo_Buscador>

          <Router>
            <a href="/">Inicio</a>
            <a href="/informacion">Informacion</a>
          </Router>

          <BtnIngresar responsiveMovil={true} />

          <ButtonDesplegarMenu onClick={() => setMenu(!menu)}>
            <img src={Menu} alt="" />
          </ButtonDesplegarMenu>
        </Contenedor>

        <AnimatePresence>{menu && <Movil />}</AnimatePresence>
      </Nav>
    </>
  );
};

export default Navegacion;
