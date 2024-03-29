import styled from "styled-components";
import { motion } from "framer-motion";

import BtnIngresar from "./BtnIngresar";
import LogoMovil from "./LogoMovil";

const Contenedor = styled(motion.div)`
  display: flex;
  width: 100%;
  z-index: 14;
  height: 220px;
  position: absolute;
  @media (min-width: 600px) {
    display: none;
  }
`;
const Ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  width: 100%;
  height: 100%;

  background-color: #ffffff;
  list-style: none;
  gap: 15px;
`;
const Lista = styled.li`
  margin: auto;
`;

const Link = styled.a`
  background-color: transparent;
  font-size: 18px;
  color: black;
  text-decoration: none;
`;
const Movil = () => {
  return (
    <Contenedor
      key="MovilNavegacion"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.45 }}
    >
      <Ul>
        <Lista>
          <LogoMovil />
        </Lista>

        <Lista>
          <Link href="/informacion">Informacion</Link>
        </Lista>
        <Lista>
          <Link href="/">Inicio</Link>
        </Lista>

        <Lista>
          <BtnIngresar />
        </Lista>
      </Ul>
    </Contenedor>
  );
};

export default Movil;
