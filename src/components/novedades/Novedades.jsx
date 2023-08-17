import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ElementAnimal from "../../utils/card-producto/ElementAnimal";


const Contenedor = styled.section`
  margin: 30px 0;
`;
const Contenedor_Titulo = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  margin: auto;
  font-size: 25px;
  margin-bottom: 30px;
  width: 90%;
  max-width: 1100px;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    top: 50%;
    right: 0;
    background: #c7c7c7;
    @media (min-width: 768px) {
      width: 55%;
    }
    @media (min-width: 1024px) {
      width: 65%;
    }
    @media (min-width: 1200px) {
      width: 72%;
    }
  }
`;
const Contenedor_Contenedor = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 85%;
  max-width: 1150px;
  margin: 0 auto 45px auto;
  gap: 30px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Novedades = () => {
  const [getNovedades, setGetNovedades] = useState([]);

  const url = "http://localhost:3001/api/novedades";

  useEffect(() => {
    const apiGet = async () => {
      try {
        const response = await axios.get(url);
        setGetNovedades(response.data.productos);
      } catch (err) {
        console.error("Error en la solicitud GET:", err);
      }
    };

    apiGet();
  }, []);

  return (
    <>
      <Contenedor>
        <Contenedor_Titulo>Productos más populares</Contenedor_Titulo>

        <Contenedor_Contenedor>
          {getNovedades.map((item, key) => (
            <div key={key}>
              <ElementAnimal
                src={item.imgSrc}
                nombre={item.nombre}
                marca={item.marca}
                kg={item.kg}
                precio={item.precio}
              />
            </div>
          ))}
        </Contenedor_Contenedor>
      </Contenedor>
    </>
  );
};

export default Novedades;
