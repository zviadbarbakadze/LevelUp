import React from "react";
import styled from "styled-components";
import hundreedImage from "../assets/Rounded.png";
import MensImage from "../assets/mens.png";

export default function SimilarPromotions() {
  return (
    <Container>
      <Text>მსგავსი აქციები</Text>
      <PromoContainer>
        <ImageContainer>
          <ImageBoldText>Get 300% Cashback</ImageBoldText>
          <ImageText>
            retrieve 300% bet amount as real money only here
          </ImageText>
          <Image src={hundreedImage} alt="" />
        </ImageContainer>
        <ImageContainer>
          <ImageBoldText>Win a Jackpot</ImageBoldText>
          <ImageText>
            retrieve 300% bet amount as real money only here
          </ImageText>
          <Image src={MensImage} alt="" />
        </ImageContainer>
        <ImageContainer>
          <ImageBoldText>Get 300% Cashback</ImageBoldText>
          <ImageText>
            retrieve 300% bet amount as real money only here
          </ImageText>
          <Image src={hundreedImage} alt="" />
        </ImageContainer>
        <ImageContainer>
          <ImageBoldText>Win a Jackpot</ImageBoldText>
          <ImageText>
            retrieve 300% bet amount as real money only here
          </ImageText>
          <Image src={MensImage} alt="" />
        </ImageContainer>
      </PromoContainer>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  width: 100%;
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
`;
const PromoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;
const ImageBoldText = styled.span`
  font-size: 14px;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 50%;
  left: 16px;
`;
const ImageText = styled.span`
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 30%;
  left: 16px;
  @media (max-width: 768px) {
    bottom: 35%;
  }
  @media (max-width: 450px) {
    bottom: 35%;
  }
`;
