import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  color: white;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: #252525;
  border-radius: 2px;
  padding: 8px 8.5px;
  border: 1px solid transparent;
  :focus {
    border: 1px solid grey;
  }
  ::placeholder {
    color: grey;
  }
`;

const Texto = ({ htmlFor, placeHolder, value, onChange }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>
        {htmlFor}
        <Input
          type="text"
          id={htmlFor}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required
        />
      </Label>
    </>
  );
};

export default Texto;
