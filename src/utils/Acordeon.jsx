import { useState } from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 90%;
  max-width: 550px;
  border: 1px solid #ddd;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  overflow: hidden;
`;

const Item = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.active ? "#e1e1e1" : "white")};
  cursor: pointer;
`;

const Contenido = styled.div`
  padding: 10px;
  display: ${(props) => (props.active ? "block" : "none")};
  background-color: white;
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
