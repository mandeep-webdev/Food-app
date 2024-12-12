import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Container>
      <SpinnerCircle></SpinnerCircle>
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const SpinnerCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #ff0909;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
