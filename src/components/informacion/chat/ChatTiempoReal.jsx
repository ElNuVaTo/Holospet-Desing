import styled from "styled-components";

import Enviar from "../../../assets/icons/Chat_Enviar.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 850px;
  height: 500px;
  background-color: #efefef;
`;
const Contenedor = styled.div``;
const Contenedor_Enviar_Texto = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 10px;
  gap: 10px;
`;
const Label = styled.label`
  display: flex;
  overflow: hidden;
  height: 32px;
  width: 100%;
  border-radius: 15px;
`;
const Input = styled.input`
  width: 100%;
  padding: 0 15px;
  font-size: 15.5px;
  height: 100%;
  border-radius: 15px 0 0 15px;
  border: none;
  background-color: #f6f8fc;
  border: 1px solid #c8c8c8;
  :focus {
    outline: none;
    border: 1px solid #929292;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 35px;
  overflow: hidden;
  border: none;
  background-color: #007bff;
  cursor: pointer;
  position: relative;
  img {
    position: absolute;
    bottom: 4.5px;
    left: -0.5px;
    padding: 3px;
    object-fit: cover;
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
`;

const ChatTiempoReal = () => {
  return (
    <>
      <Main>
        <Contenedor></Contenedor>

        <Contenedor_Enviar_Texto>
          <Label htmlFor="">
            <Input type="text" placeholder="Escribe un mensaje..." />
            <Button type="submit">
              <img src={Enviar} alt="" draggable={false} />
            </Button>
          </Label>
        </Contenedor_Enviar_Texto>
      </Main>
    </>
  );
};

export default ChatTiempoReal;
