import styled from "styled-components";

import Logo from "../../assets/Logo.webp";

const ImageLogo = styled.a`
  display: flex;
  height: 50px;
  width: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LogoMovil = () => {
  return (
    <ImageLogo href="/">
      <img src={Logo} alt="" />
    </ImageLogo>
  );
};

export default LogoMovil;
