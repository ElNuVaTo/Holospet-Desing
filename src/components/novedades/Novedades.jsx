import styled from "styled-components";
import ElementAnimal from "../../utils/ElementAnimal";
import MapJson from "./UltimosLanzamientos.json";

const Contenedor = styled.section`
  margin: 50px 0;
`;

const Contenedor_Titulo = styled.div`
  display: flex;
  width: max-content;
  margin: auto;
`;
const Titulo = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 26px;
  position: relative;
  margin-bottom: 35px;
  b {
    color: #007bff;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    display: block;
  }
`;

const Contenedor_Contenedor = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto 50px auto;
  gap: 50px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Novedades = () => {
  return (
    <>
      <Contenedor>
        <Contenedor_Titulo>
          <Titulo>
            Ultimos
            <b> lanzamientos</b>
          </Titulo>
        </Contenedor_Titulo>

        <Contenedor_Contenedor>
          {MapJson.map((item, key) => (
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
