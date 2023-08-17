import styled from "styled-components";

import ElementAnimal from "../../utils/card-producto/ElementAnimal";

const Contenedor = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 85%;
  max-width: 1100px;
  margin-left: auto;
  gap: 30px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
const ProductosCard = ({ getNovedades }) => {
  return (
    <>
      <Contenedor>
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
      </Contenedor>
    </>
  );
};

export default ProductosCard;
