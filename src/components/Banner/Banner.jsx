import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { wrap } from "popmotion";

import Flecha from "../../assets/icons/HaciaArriba.svg";
import banner0 from "../../assets/banner/Banner-0.jpg";
import banner1 from "../../assets/banner/Banner-1.jpg";
import banner2 from "../../assets/banner/Banner-2.jpg";
import banner3 from "../../assets/banner/Banner-3.jpeg";
import banner4 from "../../assets/banner/Banner-4.jpg";
import banner5 from "../../assets/banner/Banner-5.jpg";

const Imagen = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: grab;
  z-index: 1;
  object-fit: cover;
  @media (min-width: 880px) {
    object-fit: contain;
  }
`;
const Izquierda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  left: 15px;
  transform: rotate(270deg);
  @media (min-width: 990px) {
    width: 35px;
    height: 35px;
    left: 25px;
  }
`;
const Derecha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  right: 15px;
  transform: rotate(-270deg);

  @media (min-width: 990px) {
    width: 35px;
    height: 35px;
    right: 25px;
  }
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// Draggeable Movil y Escritorio
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Banner = () => {
  const Imagenes = [banner0, banner1, banner2, banner3, banner4, banner5];
  const [[pagina, direccion], setPage] = useState([0, 0]);

  const imagenIndex = wrap(0, Imagenes.length, pagina);

  const numberPagina = (nuevaDireccion) => {
    setPage([pagina + nuevaDireccion, nuevaDireccion]);
  };
  const anterior = () => numberPagina(-1);
  const siguiente = () => numberPagina(1);

  const Contenedor = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 110px;
    overflow: hidden;
    @media (min-width: 375px) {
      height: 130px;
    }
    @media (min-width: 425px) {
      height: 150px;
    }
    @media (min-width: 500px) {
      height: 210px;
    }
    @media (min-width: 620px) {
      height: 230px;
    }
    @media (min-width: 700px) {
      height: 260px;
    }
    @media (min-width: 770px) {
      height: 300px;
    }
    @media (min-width: 880px) {
      height: 350px;
    }
    @media (min-width: 990px) {
      height: 400px;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${Imagenes[imagenIndex]});
        background-size: cover;
        background-position: center;
        filter: blur(8px) brightness(60%);
        z-index: 0;
      }
    }
  `;

  return (
    <>
      <Contenedor>
        <AnimatePresence initial={false} custom={direccion}>
          <Imagen
            draggable={false}
            key={pagina}
            variants={variants}
            custom={direccion}
            src={Imagenes[imagenIndex]}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                numberPagina(1);
              } else if (swipe > swipeConfidenceThreshold) {
                numberPagina(-1);
              }
            }}
          />
        </AnimatePresence>

        <Izquierda onClick={anterior}>
          <img src={Flecha} />
        </Izquierda>
        <Derecha onClick={siguiente}>
          <img src={Flecha} />
        </Derecha>
      </Contenedor>
    </>
  );
};

export default Banner;
