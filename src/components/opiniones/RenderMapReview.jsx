import styled from "styled-components";
import Estrellas from "./Estrellas";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 200px;
  margin: auto;
  padding: 10px;
  border: 1px solid #dddddd;
  background: white;
  border-radius: 15px;
`;
const Usuario = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Photo_Usuario = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
const User_Name_Estrellas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  gap: 5px;

  p {
    height: 92px;
    overflow: hidden;
  }
`;

const RenderMapReview = ({ src, nombre, start, desc }) => {
  return (
    <>
      <Contenedor>
        <Usuario>
          <Photo_Usuario src={src} alt="" />
          <User_Name_Estrellas>
            <b>{nombre}</b>
            <Estrellas start={start} />
          </User_Name_Estrellas>
        </Usuario>
        <Review>
          <p>{desc}</p>
        </Review>
      </Contenedor>
    </>
  );
};

export default RenderMapReview;
