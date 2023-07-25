import styled from "styled-components";

import Buscar from "../../assets/icons/Buscar.svg";

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  min-width: 255px;
  height: 32px;
  background-color: white;
  border-radius: 5px;
`;
const Input = styled.input`
  padding: 0 5px 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: grey;
  }
`;
const Icono = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
  right: 0px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  border: 1px solid #ddd;
  border-left: transparent;

  img {
    user-select: none;
    object-fit: cover;
    height: 20px;
    width: 20px;
  }
`;

const Buscador = ({ onChange, value }) => {
  return (
    <Label htmlFor="Buscar">
      <Input
        id="Buscar"
        type="text"
        placeholder="Nombre de un producto"
        value={value}
        onChange={onChange}
      />
      <Icono>
        <img src={Buscar} alt="" />
      </Icono>
    </Label>
  );
};

export default Buscador;
