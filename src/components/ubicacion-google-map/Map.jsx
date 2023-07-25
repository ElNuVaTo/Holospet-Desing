import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  p,
  b {
    margin: 5px;
    text-align: center;
  }
  b {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
`;
const Frame = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 200px;
  border: none;
  margin: auto;
  border-radius: 5px;

  @media (min-width: 990px) {
    height: 250px;
  }
`;

const Map = () => {
  return (
    <>
      <Contenedor>
        <Texto>
          <b>¡Lunes a domingo!</b>
          <p>Tu pedido en menos de 180 minutos. exclusivamente en la serena!</p>
        </Texto>
        <Frame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13829.27599529302!2d-71.2407158!3d-29.9415017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cb478fba9a45%3A0xc9e4bf866ff79099!2sHolospet%20%7C%20Tienda%20de%20mascotas!5e0!3m2!1ses-419!2scl!4v1689707815519!5m2!1ses-419!2scl"></Frame>
      </Contenedor>
    </>
  );
};

export default Map;
