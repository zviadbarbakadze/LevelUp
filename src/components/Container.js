import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Container() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: #1c1d1e;
  color: white;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
