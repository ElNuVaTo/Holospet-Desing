import { useState, useEffect } from "react";
import styled from "styled-components";

import Inactiva from "../../assets/icons/Estrella-Inactiva.svg";
import Activa from "../../assets/icons/Estrella-Activa.svg";

const Contenedor = styled.div`
  display: flex;
`;

const Icono = styled.img`
  width: 15px;
  height: 15px;
`;

const Estrellas = ({ start }) => { 
  const cuantasEstrellas = () => {
    if (start === 1) {
      return [Activa, Inactiva, Inactiva, Inactiva, Inactiva];
    }
    if (start === 2) {
      return [Activa, Activa, Inactiva, Inactiva, Inactiva];
    }
    if (start === 3) {
      return [Activa, Activa, Activa, Inactiva, Inactiva];
    }
    if (start === 4) {
      return [Activa, Activa, Activa, Activa, Inactiva];
    }
    if (start === 5) {
      return [Activa, Activa, Activa, Activa, Activa];
    }
  };

  const [mapIconos, setMapIconos] = useState(cuantasEstrellas);

  useEffect(() => {
    setMapIconos(cuantasEstrellas());
  }, [start]);

  return (
    <>
      <Contenedor>
        {mapIconos.map((item, key) => (
          <div key={key}>
            <Icono src={item} />
          </div>
        ))}
      </Contenedor>
    </>
  );
};

export default Estrellas;
