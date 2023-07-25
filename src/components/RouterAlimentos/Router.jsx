import { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Link from "./Link";

import Seco from "../../assets/photos/concentrado-perro.png";
import Humedo from "../../assets/photos/humedo-perro.png";
import Anti from "../../assets/photos/antiparasitarios.png";
import Arena from "../../assets/photos/arenas.png";
import Snack from "../../assets/photos/snacks-perro.png";
import Juguete from "../../assets/photos/descarga.jfif";
import Accesorios from "../../assets/photos/corderito-mascota-mister-and-misses-.webp";

const Contenedor = styled.div`
  cursor: grab;
  overflow: hidden;
  display: flex;
  margin: 10px auto;
  overflow: hidden;

  @media (min-width: 990px) {
    cursor: auto;
    width: 100%;
    width: max-content;
  }
`;
const Draggeable = styled(motion.div)`
  display: flex;
  width: max-content;
  gap: 35px;
  padding: 5px 25px;
`;

const Router = () => {
  const dragRef = useRef();

  return (
    <>
      <Contenedor ref={dragRef}>
        <Draggeable drag="x" dragElastic={false} dragConstraints={dragRef}>
          <Link src={Seco} href="comida-seca" texto="Seca" />
          <Link src={Humedo} href="comida-humeda" texto="Humeda" />
          <Link src={Anti} href="antiparasitarios" texto="Antiparasitarios" />
          <Link src={Arena} href="arena" texto="Arena" />
          <Link src={Snack} href="snack" texto="Snack" />
          <Link src={Juguete} href="juguete" texto="Juguetes" />
          <Link src={Accesorios} href="accesorios" texto="Accesorios" />
        </Draggeable>
      </Contenedor>
    </>
  );
};

export default Router;
