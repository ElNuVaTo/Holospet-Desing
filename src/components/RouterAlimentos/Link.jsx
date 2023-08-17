import styled from "styled-components";

const Router = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  white-space: nowrap;
  text-decoration: none;
  font-size: 16px;
  gap: 5px;
`;
const Imagen = styled.div`
  overflow: hidden;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  background-color: white;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 55%;
    left: -55%;
    border-radius: 5px 0 0 5px;
    border: 2px solid var(--btn);
    border-color: var(--btn) transparent var(--btn) transparent;
    transition: ease-in-out 0.25s;
  }
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 55%;
    right: -55%;
    border-radius: 0 5px 5px 0;
    border: 2px solid var(--btn);
    border-color: var(--btn) transparent var(--btn) transparent;
    transition: ease-in-out 0.25s;
  }
  .top {
    position: absolute;
    top: -55%;
    height: 55%;
    width: 100%;
    border-radius: 5px 5px 0 0;
    transition: ease-in-out 0.25s;
    border: 2px solid black;
    border-color: transparent var(--btn) transparent var(--btn);
  }
  .bottom {
    position: absolute;
    bottom: -55%;
    height: 55%;
    width: 100%;
    border-radius: 0 0 5px 5px;
    transition: ease-in-out 0.25s;
    border: 2px solid black;
    border-color: transparent var(--btn) transparent var(--btn);
  }
  :hover::after {
    left: 0;
  }
  :hover::before {
    right: 0;
  }
  :hover .top {
    top: 0;
  }
  :hover .bottom {
    bottom: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    padding: 10px;
    transition: linear 0.2s;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 990px) {
    width: 120px;
    height: 120px;
  }
`;

const Link = ({ href, src, texto }) => {
  return (
    <>
      <Router href={href}>
        <Imagen>
          <span className="top"></span>
          <span className="bottom"></span>
          <img src={src} alt="" />
        </Imagen>
        {texto}
      </Router>
    </>
  );
};

export default Link;
