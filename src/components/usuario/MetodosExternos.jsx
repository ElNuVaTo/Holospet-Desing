import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: auto auto 0 auto;
  gap: 25px;
  justify-content: center;
  width: 80%;
  border-top: 1px solid #656565;
  padding: 15px 0%;
`;
const MetodosExternos = ({ onClickGoogle }) => {
  return (
    <>
      <Box>
        <button className="GoogleBtn" type="button" onClick={onClickGoogle}>
          Google
        </button>
      </Box>
    </>
  );
};

export default MetodosExternos;
