import styled from "styled-components";

import Ubicacion from "../../assets/icons/Ubicacion.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Faceebok from "../../assets/icons/Facebook.svg";
import Whatsapp from "../../assets/icons/Whatsapp.svg";

const FooterStyled = styled.footer`
  background-color: #283464;
  color: white;
  padding: 15px 5px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;
const Data = styled.div``;
const Contactar = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  justify-content: center;
  gap: 20px;
  a {
    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
    }
  }
`;
const Derechos = styled.div`
  display: flex;
  width: 95%;
  max-width: 1100px;
  justify-content: center;
  margin: auto;
  position: relative;
  padding: 15px 0 0 0;

  ::after {
    content: "";
    position: absolute;
    background-color: #ff8944;
    height: 1px;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const Contacto = {
    Ubicacion:
      "https://www.google.com/maps/place/Holospet+%7C+Tienda+de+mascotas+ex+btcmarket/@-29.9415075,-71.2428334,17z/data=!3m1!4b1!4m5!3m4!1s0x9691cb478fba9a45:0xc9e4bf866ff79099!8m2!3d-29.9415122!4d-71.2406394?shorturl=1",
    Instagram: "https://www.instagram.com/holospet.cl/",
    Faceebok: "https://www.facebook.com/holospet.cl/",
    Whatsapp:
      "https://api.whatsapp.com/send?phone=56939585042&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20un%20producto",
  };

  return (
    <FooterStyled>
      <Data>
        <Contactar>
          <a href={Contacto.Ubicacion}>
            <img src={Ubicacion} alt="" />
          </a>
          <a href={Contacto.Instagram}>
            <img src={Instagram} alt="" />
          </a>
          <a href={Contacto.Faceebok}>
            <img src={Faceebok} alt="" />
          </a>
          <a href={Contacto.Whatsapp}>
            <img src={Whatsapp} alt="" />
          </a>
        </Contactar>
      </Data>
      <Derechos>
        © {currentYear} Holospet.cl Todos los derechos reservados.
      </Derechos>
    </FooterStyled>
  );
};

export default Footer;
