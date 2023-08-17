import styled from "styled-components";
import axios from "axios";

import AgregarAlCarro from "./AgregarAlCarro";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  margin: 35px auto;
  width: 95%;
  max-width: 1200px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
`;
const Imagen = styled.div`
  width: 550px;
  aspect-ratio: 1/1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Informacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;
  border: 1px solid black;
`;

const ProductoSolitario = ({ getData }) => {
  const { imgSrc, nombre, marca, precio, _id } = getData;

  const agregarCarrito = () => {
    const agregar = async () => { 
      try {
        await axios.put('http://localhost:3001/api/agregarAlCarrito', {
          carrito: _id,
        }, {
          headers: {
            Authorization: sessionStorage.getItem("Auth"),
          },
        });
        console.log('Producto agregado al carrito exitosamente.');
      } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
      }
    };
    
    agregar();
  };
  

  return (
    <>
      <Contenedor>
        <Imagen>
          <img src={imgSrc} alt="" />
        </Imagen>

        <Informacion>
          <h2>{nombre}</h2>
          <em>Marca: {marca}</em>
          <b>{precio}</b>
          <AgregarAlCarro onClick={agregarCarrito} />
        </Informacion>
      </Contenedor>
    </>
  );
};

export default ProductoSolitario;
