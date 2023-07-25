import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 200px;
  margin: auto;
  padding: 15px 10px;
  border: 1px solid #dddddd3f;
  background: white;
  border-radius: 15px;
`;
const Usuario = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
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
          <img src={src} alt="" />
          <b>{nombre}</b>
        </Usuario>
        <Review>
          <b>{start}</b>
          <p>{desc}</p>
        </Review>
      </Contenedor>
    </>
  );
};

export default RenderMapReview;
