import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000090;
  color: #ffffff;
  position: fixed;
  height: 100vh;
  width: 100vw;
  font-size: 18px;
  z-index: 30;
`;

const Loader = () => {
  return (
    <Wrapper>
      <span>Loading...</span>
    </Wrapper>
  );
};

export default Loader;
