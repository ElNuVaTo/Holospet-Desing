import { motion } from "framer-motion";
import styled from "styled-components";

const Label = styled(motion.label)`
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;
  width: max-content;
  padding: 4px 5px;
  border-radius: 2px;
  cursor: pointer;
  z-index: 1;
`;

const Input = styled.input`
  display: block;
  border-radius: 1px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  cursor: pointer;
  appearance: none;
  z-index: 2;
  &:checked {
    background-color: #ffaa83;
    border: 1px solid transparent;
  }
  &:not(:checked) {
    background-color: transparent;
    border: 1px solid #ffaa83;
  }

  &:checked::before {
    z-index: 2;
    content: "";
    display: block;
    text-align: center;
    color: white;
  }

  &:hover:checked {
    background-color: #ffaa83;
  }
`;

const RadioInput = ({ name, onChange, value, checked }) => {
  return (
    <>
      <Label
        htmlFor={name}
        whileTap={{ scale: 1.02 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
      >
        <Input
          type="radio"
          name="Categoria"
          id={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {name}
      </Label>
    </>
  );
};

export default RadioInput;
