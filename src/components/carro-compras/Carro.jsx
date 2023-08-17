import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

import CarritoDeCompras from "../../assets/icons/EnCarrito.svg";
import CardRender from "./CardRender";

const Main = styled(motion.div)`
  position: fixed;
  z-index: 10;
  bottom: 10px;
  right: 10px;
`;
const Contenedor = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 50px;
  width: 300px;
  height: 550px;
  background-color: #dddddd;
  border-radius: 5px 5px 30px 5px;
`;
const Image = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: var(--btn);
  border-radius: 50%;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding: 12px;
  }
`;

const variants = {
  activo: {
    clipPath: `circle(100% at 50% 50%)`,
  },
  inactivo: {
    clipPath: `circle(0px at 100% 100%)`,
  },
};

const Carro = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const url = "http://localhost:3001/api/misProductos";
  useEffect(() => {
    const carroDeCompras = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: sessionStorage.getItem("Auth"),
          },
        });

        setData(response.data.productos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    carroDeCompras();
  }, []);

  const precios = () => data.map((item) => item.precio.replace("$", ""));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const preciosNumeros = precios().map((price) =>
      parseFloat(price.replace(".", "").replace(",", "."))
    );
    const totalPrecios = preciosNumeros.reduce((acc, price) => acc + price, 0);
    setTotal(totalPrecios);
  }, [data]);

  const formatNumber = (num) => {
    const parts = num.toLocaleString("en-US").split(".");
    parts[0] = parts[0].replace(/,/g, ".");
    return parts.join(",");
  };

  console.log(precios());

  return (
    <>
      <Main>
        <AnimatePresence>
          {visible && (
            <Contenedor
              variants={variants}
              initial="inactivo"
              animate="activo"
              exit="inactivo"
            >
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <CardRender
                      imgSrc={item.imgSrc}
                      nombre={item.nombre}
                      precio={item.precio}
                    />
                  </div>
                ))}
              </div>
              <p>Total: {formatNumber(total)}$</p>
            </Contenedor>
          )}
        </AnimatePresence>

        <Image onClick={toggleVisibility}>
          <img src={CarritoDeCompras} draggable={false} alt="" />
        </Image>
      </Main>
    </>
  );
};

export default Carro;
