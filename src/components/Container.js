import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function Container() {
  return (
    <MainContainer>
      <Header />
      <Body />
      <Footer />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  background-color: #1c1d1e;

  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
