import { useState } from "react";
import styled from "styled-components";

import Flecha from "../../assets/icons/HaciaArriba.svg";

const Contenedor = styled.div`
  position: relative;
  width: 210px;
  margin: 0 auto;
`;
const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  user-select: none;
  width: 100%;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto 10px auto;
  background-color: #ff8248;
  color: #ffffff;
  white-space: nowrap;
`;
const IconoFlecha = styled.img`
  height: 22px;
  width: 22px;
  object-fit: contain;
  right: 0;
`;
const Opciones = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  background-color: var(--fondoPrincipal);
  z-index: 3;
  overflow: hidden;
  border: 1px solid #c7c7c7;
  div {
    cursor: pointer;
    padding: 8px 10px;
    user-select: none;
    color: #252525;
    border-bottom: 1px solid #c7c7c7;

    :last-child {
      border-bottom: none; /* Establecer el borde inferior a ninguno para el último elemento */
    }

    :hover {
      background-color: #ff8248;
      color: white;
    }
  }
`;
const Seleccionar = ({ arrayMap, marcaSeleccionada, setMarcaSeleccionada }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);
  const onClickValue = (item) => setMarcaSeleccionada(item);

  // Filter no repetir marcas
  const uniqueMarcas = arrayMap.filter(
    (item, index, self) =>
      self.findIndex((t) => t.marca === item.marca) === index
  );

  return (
    <>
      <Contenedor>
        <Select onClick={toggleVisible}>
          {marcaSeleccionada}
          <IconoFlecha src={Flecha} alt="" />
        </Select>
        {visible && (
          <Opciones>
            <div onClick={() => onClickValue("Sin marca")}>Sin marca</div>
            {uniqueMarcas.map((item, key) => (
              <div key={key} onClick={() => onClickValue(item.marca)}>
                {item.marca}
              </div>
            ))}
          </Opciones>
        )}
      </Contenedor>
    </>
  );
};

export default Seleccionar;
