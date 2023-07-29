import styled from "styled-components";
import BtnComprar from "./BtnComprar";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  height: 350px;
  background-color: white;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 10px 10px 15px 10px;
  border-radius: 5px;
  gap: 5px;
  margin: auto;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    user-select: none;
  }
`;
const CardNombre = styled.b`
  font-size: 15.5px;
`;
const CardMarca = styled.em`
  color: grey;
  font-size: 14px;
`;
const CardPrecio = styled.b`
  font-size: 17px;
`;

const ElementAnimal = ({ src, nombre, marca, precio }) => {
  return (
    <>
      <CardContainer>
        <CardImage>
          <img src={src} alt="" />
        </CardImage>
        <CardNombre>{nombre}</CardNombre>
        <CardMarca>{marca}</CardMarca>
        <CardPrecio>{precio}</CardPrecio>

        <BtnComprar />
      </CardContainer>
    </>
  );
};

export default ElementAnimal;
