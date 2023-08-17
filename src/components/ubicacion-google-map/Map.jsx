import styled from "styled-components";

import Holospet from "../../assets/photos/HolospetTiendaLocal.jpg";

const Contenedor = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;
const Subtitulo = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  font-size: 22px;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    top: 50%;
    left: 0;
    background: #c7c7c7;
    @media (min-width: 768px) {
      width: 32%;
    }
    @media (min-width: 1024px) {
      width: 35%;
    }
    @media (min-width: 1200px) {
      width: 38%;
    }
  }
  ::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    top: 50%;
    right: 0;
    background: #c7c7c7;
    @media (min-width: 768px) {
      width: 32%;
    }
    @media (min-width: 1024px) {
      width: 35%;
    }
    @media (min-width: 1200px) {
      width: 38%;
    }
  }
`;
const Contenedor_Mapa_Texto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 15px 0;
  overflow: hidden;
`;
const Frame = styled.iframe`
  width: 100%;
  max-width: 500px;
  height: 200px;
  border: none;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
  @media (min-width: 990px) {
    height: 250px;
  }
`;
const Informacion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 200px;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  @media (min-width: 990px) {
    height: 250px;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 1;
    filter: brightness(55%);
    border-radius: 0 5px 5px 0;
  }
  p {
    width: 90%;
    z-index: 2;
    color: white;
  }
`;

const Map = () => {
  return (
    <>
      <Contenedor>
        <Subtitulo>¿Donde nos ubicamos?</Subtitulo>
        <Contenedor_Mapa_Texto>
          <Frame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13829.27599529302!2d-71.2407158!3d-29.9415017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cb478fba9a45%3A0xc9e4bf866ff79099!2sHolospet%20%7C%20Tienda%20de%20mascotas!5e0!3m2!1ses-419!2scl!4v1689707815519!5m2!1ses-419!2scl"></Frame>
          <Informacion>
            <img src={Holospet} alt="" />
            <p>
              Nos destacamos por envíos rápidos en menos de 180 minutos y una
              atención al cliente ágil y eficiente. Nuestro equipo de expertos
              está dispuesto a resolver tus dudas y garantizar tu satisfacción.
            </p>
          </Informacion>
        </Contenedor_Mapa_Texto>
      </Contenedor>
    </>
  );
};

export default Map;
