import React from "react";
import styled from "styled-components";
import hundreedImage from "../assets/Rounded.png";
import MensImage from "../assets/mens.png";
import { MediumText } from "./WidelyUsed";

export default function SimilarPromotions() {
  return (
    <Container>
      <MediumText>მსგავსი აქციები</MediumText>
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
          <ImageBoldText>Coming Soon</ImageBoldText>
          <ImageText>
            retrieve 300% bet amount as real money only here
          </ImageText>
          <Image src={MensImage} alt="" />
        </ImageContainer>
      </PromoContainer>
      <PlayDiv>
        <PlayButton>ითამაშე</PlayButton>
      </PlayDiv>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  width: 100%;
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
    justify-content: center;
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
const PlayDiv = styled.div`
  width: 60%;
  background-color: #171718;
  border-top: 1px solid #f05a22;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 20%;
  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
  }
`;
export const PlayButton = styled.button`
  width: 144px;
  height: 36px;
  border-radius: 2px;
  border: none;
  outline: none;
  background-color: #f05a22;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;
