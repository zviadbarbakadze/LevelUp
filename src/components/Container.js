import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Container() {
  return (
    <MainContainer>
      <Header />
      <Footer />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  background-color: #1c1d1e;
  color: white;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
