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
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    @media (min-width: 990px) {
      width: 120px;
      height: 120px;
    }
  }
`;

const Link = ({ href, src, texto }) => {
  return (
    <>
      <Router href={href}>
        <img src={src} alt="" />
        {texto}
      </Router>
    </>
  );
};

export default Link;
