import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Imagen = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;
const CardRender = ({ imgSrc, nombre, precio }) => {
  return (
    <>
      <Contenedor>
        <Imagen src={imgSrc} alt="" />
        <p>{nombre}</p>
        <b>{precio}</b>
      </Contenedor>
    </>
  );
};

export default CardRender;
