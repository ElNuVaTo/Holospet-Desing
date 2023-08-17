import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Filtros from "./Filtros";
import ProductosCard from "./ProductosCard";

const Main = styled.main`
  display: flex;
  width: 95%;
  margin: 50px auto;
`;
const Explorar = () => {
  const [getNovedades, setGetNovedades] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(
    "Selecciona una marca"
  );
  const [urlCategoria, setUrlCategoria] = useState(
    "http://localhost:3001/api/explorar"
  );

  useEffect(() => {
    const apiGet = async () => {
      try {
        const response = await axios.get(urlCategoria);
        setGetNovedades(response.data.productos);
      } catch (err) {
        console.error("Error en la solicitud GET:", err);
      }
    };

    apiGet();
  }, [urlCategoria]);

  const filterMarca = () => {
    if (
      marcaSeleccionada !== "Selecciona una marca" &&
      marcaSeleccionada !== "Sin marca"
    ) {
      return getNovedades.filter((item) => item.marca === marcaSeleccionada);
    } else {
      return getNovedades;
    }
  };

  return (
    <>
      <Main>
        <Filtros
          getNovedades={getNovedades}
          urlCategoria={urlCategoria}
          setUrlCategoria={setUrlCategoria}
          marcaSeleccionada={marcaSeleccionada}
          setMarcaSeleccionada={setMarcaSeleccionada}
        />
        <ProductosCard getNovedades={filterMarca()} />
      </Main>
    </>
  );
};

export default Explorar;
