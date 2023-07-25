import { useState } from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 90%;
  max-width: 350px;
  border: 1px solid #ccc;
  margin: 20px auto;
`;

const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "transparent")};
  cursor: pointer;
`;

const Contenido = styled.div`
  padding: 10px;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const Acordeon = ({ pregunta, respuesta }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Contenedor>
      <Item active={activeIndex === 0} onClick={() => handleItemClick(0)}>
        {pregunta}
      </Item>
      <Contenido active={activeIndex === 0}>{respuesta}</Contenido>
    </Contenedor>
  );
};

export default Acordeon;
