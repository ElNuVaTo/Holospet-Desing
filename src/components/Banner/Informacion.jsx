import styled from "styled-components";

import Ubicacion from "../../assets/icons/Ubicacion.svg";
import Whatsapp from "../../assets/icons/Whatsapp.svg";
import Retirar from "../../assets/icons/RetiroEnTienda.svg";
import Delivery from "../../assets/icons/Delivery.svg";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 350px;
  margin: 15px auto;
  border-radius: 5px;
  padding: 15px 5px;
  gap: 15px;
  background-color: #007bff;
  @media (min-width: 600px) {
    max-width: 1300px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 300px;
`;
const Contenedor_Texto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  b {
    color: white;
    font-size: 15px;
    font-weight: 550;
  }
  p {
    color: #eeeeee;
    font-size: 14.5px;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    b {
      font-size: 16px;
    }
    p {
      font-size: 15px;
    }
  }
`;
const Imagen = styled.img`
  width: 30px;
  height: 30px;
`;
const Informacion = () => {
  return (
    <>
      <Contenedor>
        <Info>
          <Imagen src={Ubicacion} alt="" />
          <Contenedor_Texto>
            <b>Nuestro local</b>
            <p>La Serena Av. Guillermo Ulriksen #3098</p>
          </Contenedor_Texto>
        </Info>

        <Info>
          <Imagen src={Whatsapp} alt="" />
          <Contenedor_Texto>
            <b>+56 9 3958 5042</b>
            <p>¡Tienes nuestra atencion todo los dias!</p>
          </Contenedor_Texto>
        </Info>

        <Info>
          <Imagen src={Retirar} alt="" />
          <Contenedor_Texto>
            <b>Opción de retiro en tienda</b>
            <p>puedes hacerlo en nuestro local.</p>
          </Contenedor_Texto>
        </Info>

        <Info>
          <Imagen src={Delivery} alt="" />
          <Contenedor_Texto>
            <b>Delivery Express</b>
            <p>Tu pedido en menos de 180 minutos.</p>
          </Contenedor_Texto>
        </Info>
      </Contenedor>
    </>
  );
};

export default Informacion;
