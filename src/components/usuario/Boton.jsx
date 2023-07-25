import styled from "styled-components";

const Btn = styled.button`
  padding: 8px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: auto;
`;

const Boton = ({ onClick, Texto }) => {
  return (
    <>
      <Btn type="submit" onClick={onClick}>
        <p> {Texto}</p>
      </Btn>
    </>
  );
};

export default Boton;
