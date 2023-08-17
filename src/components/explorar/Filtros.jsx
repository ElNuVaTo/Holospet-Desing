import { useState } from "react";
import styled from "styled-components";

import RadioInput from "./RadioInput";
import Seleccionar from "./Seleccionar";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 18%;
`;

const Filtros = ({
  getNovedades,
  urlCategoria,
  setUrlCategoria,
  marcaSeleccionada,
  setMarcaSeleccionada,
}) => {
  const onChangeRadio = (e) => setUrlCategoria(e.target.value);

  const urlTodo = "http://localhost:3001/api/explorar";
  const urlHumedo = "http://localhost:3001/api/filtroExplorar/humeda";
  const urlSeco = "http://localhost:3001/api/filtroExplorar/seca";
  const urlAccesorios = "http://localhost:3001/api/filtroExplorar/accesorio";
  const urlFarmacia = "http://localhost:3001/api/filtroExplorar/farmacia";
  const urlCuidado = "http://localhost:3001/api/filtroExplorar/cuidados";
  const urlArena = "http://localhost:3001/api/filtroExplorar/arena";

  const radioCategorias = [
    {
      name: "Sin categoria",
      value: urlTodo,
    },
    {
      name: "Alimento Humedo",
      value: urlHumedo,
    },
    {
      name: "Alimento seco",
      value: urlSeco,
    },
    {
      name: "Accesorios",
      value: urlAccesorios,
    },
    {
      name: "Farmacia",
      value: urlFarmacia,
    },
    {
      name: "Cuidados",
      value: urlCuidado,
    },
    {
      name: "Arena",
      value: urlArena,
    },
  ];

  return (
    <>
      <Contenedor>
        <Seleccionar
          arrayMap={getNovedades}
          marcaSeleccionada={marcaSeleccionada}
          setMarcaSeleccionada={setMarcaSeleccionada}
        />

        {radioCategorias.map((item) => (
          <RadioInput
            key={item.name}
            name={item.name}
            value={item.value}
            checked={urlCategoria === item.value}
            onChange={onChangeRadio}
          />
        ))}
      </Contenedor>
    </>
  );
};

export default Filtros;
