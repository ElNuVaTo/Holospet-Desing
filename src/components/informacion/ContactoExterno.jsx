import styled from "styled-components";

import Instagram from "../../assets/icons/icons8-instagram.svg";
import Whatsapp from "../../assets/icons/icons8-whatsapp.svg";
import Faceebok from "../../assets/icons/icons8-facebook-messenger.svg";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
// E64771
const Contenedor_Link = styled.div`
  display: flex;
  gap: 25px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  text-decoration: none;
  border: 1px solid #b8b8b8;
  background-color: white;
  border-radius: 5px;
  width: 200px;
  padding: 5px 10px;
  img {
    width: 30px;
    height: 30px;
  }
  :hover {
    border-color: transparent;
  }

  &.Instagram:hover {
    background-color: #e64771;
    color: white;
  }
  &.Whatsapp:hover {
    background-color: #40c351;
    color: white;
  }
  &.Faceebok:hover {
    background-color: #448aff;
    color: white;
  }
`;

const ContactoExterno = () => {
  return (
    <>
      <Contenedor>
        <b>Habla con nosotros en otra aplicacion</b>

        <Contenedor_Link>
          <Link
            className="Instagram"
            href="https://instagram.com/btcmarketcl"
            target="_blank"
          >
            <img src={Instagram} alt="" />
            Instagram
          </Link>

          <Link
            className="Whatsapp"
            href="https://wa.me/+56939585042"
            target="_blank"
          >
            <img src={Whatsapp} alt="" />
            WhatsApp
          </Link>

          <Link
            className="Faceebok"
            href="https://m.me/110139177989384"
            target="_blank"
          >
            <img src={Faceebok} alt="" />
            Faceebok
          </Link>
        </Contenedor_Link>
      </Contenedor>
    </>
  );
};

export default ContactoExterno;
