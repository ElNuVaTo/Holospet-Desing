import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  padding: 6px 20px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: ${(props) => (props.responsiveMovil ? "none" : "block")};

  @media (min-width: 600px) {
    display: ${(props) => (!props.responsiveMovil ? "none" : "block")};
  }
`;
const BtnIngresar = ({ responsiveMovil }) => {
  const navigate = useNavigate();
  const routeIngresar = () => navigate("/ingresar");
  return (
    <Btn
      type="button"
      onClick={routeIngresar}
      responsiveMovil={responsiveMovil}
    >
      Ingresar
    </Btn>
  );
};

export default BtnIngresar;
