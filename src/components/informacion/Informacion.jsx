import styled from "styled-components";

import Acordeon from "../../utils/Acordeon";
import MapJson from "./PreguntasYRespuestas.json";
import ChatTiempoReal from "./chat/ChatTiempoReal";
import ContactoExterno from "./ContactoExterno";

const Main = styled.main`
  display: flex;
  max-width: 1350px;
  margin: 50px auto;
`;
const Preguntas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contactar = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  gap: 10px;
`;

const Informacion = () => {
  console.log(MapJson);

  return (
    <>
      <Main>
        <Preguntas>
          {MapJson.map((item, key) => (
            <div key={key}>
              <Acordeon pregunta={item.pregunta} respuesta={item.respuesta} />
            </div>
          ))}
        </Preguntas>
        <Contactar>
          <ChatTiempoReal />
          <ContactoExterno />
        </Contactar>
      </Main>
    </>
  );
};

export default Informacion;
