import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 15px 15px;
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
const CardKg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #007bff;
  width: max-content;
  padding: 2px 10px;
  color: white;
  border-radius: 5px;
  font-size: 14px;
`;
const CardPrecio = styled.b`
  font-size: 17px;
`;

const CardComprar = styled.button`
  padding: 8px 10px;
  width: 100%;
  font-size: 16.5px;
  max-width: 180px;
  margin: 10px auto 0 auto;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ec6c24;
  color: white;
`;

const ElementAnimal = ({ src, nombre, marca, kg, precio }) => {
  return (
    <>
      <CardContainer>
        <CardImage>
          <img src={src} alt="" />
        </CardImage>
        <CardNombre>{nombre}</CardNombre>
        <CardMarca>{marca}</CardMarca>
        <CardKg>{kg}</CardKg>
        <CardPrecio>{precio}</CardPrecio>

        <CardComprar type="button">Comprar</CardComprar>
      </CardContainer>
    </>
  );
};

export default ElementAnimal;
