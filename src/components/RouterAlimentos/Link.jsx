import styled from "styled-components";

const Router = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
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
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

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
