import styled from "styled-components";

const Imagen = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(0.5);
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 450px;
  position: absolute;
  margin-top: 25px;
  gap: 20px;
  h2 {
    color: white;
  }
  p {
    color: white;
  }

  div {
    display: flex;
    width: max-content;
    margin-left: auto;
    gap: 5px;
    p {
      font-size: 16px;
    }
    a {
      font-size: 16px;
      color: white;
      margin-left: auto;
      text-decoration: underline;
    }
  }
`;
const Walpapper = ({ src, h2, texto, href, textoLink, textoA }) => {
  return (
    <>
      <Imagen>
        <img src={src} alt="" />

        <Box>
          <h2>{h2}</h2>
          <p>{texto}</p>

          <div>
            <p>{textoLink}</p>
            <a href={href}>{textoA}</a>
          </div>
        </Box>
      </Imagen>
    </>
  );
};

export default Walpapper;
