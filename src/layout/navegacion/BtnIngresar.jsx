import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  --color: #ff8248;
  display: flex;
  align-items: center;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;
  color: var(--color);
  border: 2px solid var(--color);
  transition: color 0.5s;
  padding: 0 10px;
  height: 35px;
  z-index: 1;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 500;
  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  :hover {
    color: #fff;
  }
  :hover::before {
    top: -30px;
    left: -30px;
  }

  display: ${(props) => (props.responsiveMovil ? "none" : "block")};
  @media (min-width: 600px) {
    display: ${(props) => (!props.responsiveMovil ? "none" : "block")};
  }
`;
const BtnIngresar = ({ responsiveMovil }) => {
  const navigate = useNavigate();
  const routeIngresar = () => navigate("/ingresar");
  return (
    <>
      <Btn
        className="cssbuttons-io"
        type="button"
        onClick={routeIngresar}
        responsiveMovil={responsiveMovil}
      >
        Ingresar
      </Btn>
    </>
  );
};

export default BtnIngresar;
