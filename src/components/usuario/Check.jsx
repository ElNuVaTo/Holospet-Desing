import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 2px;
    opacity: 0;
  }

  &:checked:before {
    opacity: 1;
  }
`;

const Texto = styled.span`
  margin-left: 8px;
`;

const Check = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Label>
      <Input checked={checked} onChange={handleChange} />
      <Texto>{children}</Texto>
    </Label>
  );
};

export default Check;
