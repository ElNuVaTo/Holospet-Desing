import styled from "styled-components";

import Logo from "../../assets/Logo.webp";

const ImageLogo = styled.a`
  display: none;
  width: 200px;
  height: 35px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 600px) {
    display: block;
  }
`;

const LogoEscritorio = () => {
  return (
    <ImageLogo href="/">
      <img src={Logo} alt="" />
    </ImageLogo>
  );
};

export default LogoEscritorio;
