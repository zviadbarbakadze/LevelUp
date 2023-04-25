import React from "react";
import styled from "styled-components";

import { Stick, StickedCont } from "./WidelyUsed";
import clock from "../assets/mechanic-icon.png";
import { PlayButton } from "./SimilarPromotions";
import promoleft from "../assets/promo-left-img.png";
import promoright from "../assets/promo-right-img.png";

export default function Tournaments() {
  return (
    <Container>
      <Stick></Stick>
      <StickedCont>
        <BoldText>ტურნირები და სატელიტები</BoldText>
      </StickedCont>
      <EventContainer>
        <BoldText>
          სერიის ფარგლებში, ყოველდღიურად გაიმართება სამი ივენთი:
        </BoldText>
        <TimeContainer>
          <Icon src={clock} alt="" />
          <DateText> 19:00 / 19:30 / 20:00 </DateText>
        </TimeContainer>
        <ButtonTextcont>
          <Text>*ყველა ივენთზე მოხვედრა შესაძლებელია 0 ლარიდან</Text>
          <Text>ტურნირის სრული განრიგის სანახავად გადადი პოკერის ლობიში</Text>
          <PlayButton>პოკერის ლობი</PlayButton>
        </ButtonTextcont>
        <LeftImage src={promoleft} alt="" />
        <RightImage src={promoright} alt="" />
      </EventContainer>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  background-color: #2c3234;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const EventContainer = styled.div`
  position: relative;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 280px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;
export const BoldText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const Text = styled.p`
  font-size: 14px;
  color: white;
  opacity: 80%;
  text-align: center;
`;
const TimeContainer = styled.div`
  border: 2px solid #ef5a21;
  width: 200px;
  display: flex;

  border-radius: 5px;
`;
const Icon = styled.img`
  width: 30px;
  background-color: #ef5a21;
  margin-right: 10px;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
`;
const DateText = styled.p`
  color: white;
  background-color: black;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-right: 5px;
`;
const LeftImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 29%;
  @media (max-width: 768px) {
    bottom: 50%;
    width: 20%;
  }
`;
const RightImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 29%;
  @media (max-width: 768px) {
    bottom: 50%;
    width: 20%;
  }
`;
const ButtonTextcont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 50%;
  width: 100%;
  @media (max-width: 768px) {
    background-color: #2c3234;
    margin-bottom: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-bottom: 10px;
  }
`;
