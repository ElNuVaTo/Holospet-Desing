import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

import RenderMapReview from "./RenderMapReview";

const SubTitulo = styled.h2`
 text-align: center;
`;
const Contenedor = styled.section`
  display: flex;
  cursor: grab;
  overflow: hidden;
  overflow: hidden;
  width: 100%;
  margin: 15px auto;
`;
const Draggeable = styled(motion.ul)`
  display: flex;
  width: max-content;
  padding: 20px 20px;
  gap: 35px;
  background-color: #f7f7f7;
  li {
    list-style-type: none;
  }
`;
const GoogleReviews = () => {
  const dragRef = useRef();
  const [getReview, setGetReview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/GoogleReviews", { withCredentials: true })
      .then((response) => {
        setGetReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SubTitulo>¿Qué opinan nuestros clientes?</SubTitulo>
      <Contenedor ref={dragRef}>
        {getReview.length > 0 ? (
          <Draggeable drag="x" dragElastic={false} dragConstraints={dragRef}>
            {getReview.map((item, index) => (
              <li key={index}>
                <RenderMapReview
                  src={item.profile_photo_url}
                  nombre={item.author_name}
                  start={item.rating}
                  desc={item.text}
                />
              </li>
            ))}
          </Draggeable>
        ) : (
          <p>No se encontraron reseñas.</p>
        )}
      </Contenedor>
    </>
  );
};

export default GoogleReviews;
