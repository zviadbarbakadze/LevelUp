import React from "react";
import styled from "styled-components";
import { BoldText } from "./Tournaments";
import tournament from "../assets/tournament-bg.png";
import bottombg from "../assets/main-bg.png";
import bottomsm from "../assets/main-bg-sm.png";
import { InfoText } from "./CashGames";
export default function TournamentSatelites() {
  return (
    <Container>
      <BoldText>ყოველდღიური ტურნირები და სატელიტები</BoldText>
      <GridContainer>
        <TopImageContainer>
          <TextContainer>
            <BoldTextImg>Holldem Highrollers</BoldTextImg>
            <Textimg>ბაი-ინი-550₾</Textimg>
          </TextContainer>
          <TextContainer2>
            <Cash>50 000 ₾</Cash>
            <TimeCont>27 აპრილი</TimeCont>
          </TextContainer2>
        </TopImageContainer>
        <TopImageContainer>
          <TextContainer>
            <BoldTextImg>Holldem Highrollers</BoldTextImg>
            <Textimg>ბაი-ინი-550₾</Textimg>
          </TextContainer>
          <TextContainer2>
            <Cash>50 000 ₾</Cash>
            <TimeCont>27 აპრილი</TimeCont>
          </TextContainer2>
        </TopImageContainer>

        <BottomImageContainer>
          <TextContainer>
            <BoldTextImg>Main Events</BoldTextImg>
            <Textimg>ბაი-ინი-550₾</Textimg>
          </TextContainer>
          <TextContainer2>
            <Cash>150 000 ₾</Cash>
            <TimeCont2>29 აპრილი</TimeCont2>
          </TextContainer2>
        </BottomImageContainer>
      </GridContainer>
      <InfoText>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </InfoText>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: #171718;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #25292b;
`;
const GridContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 200px;
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto;
`;
const TopImageContainer = styled.div`
  background-image: url(${tournament});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    grid-column: 1/3;
  }
`;

const BottomImageContainer = styled.div`
  background-image: url(${bottombg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-column: 1/3;
  position: relative;
  @media (max-width: 768px) {
    background-image: url(${bottomsm});
  }
`;
const TextContainer = styled.div`
  width: 70%;
  left: 10%;
  top: 20%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  @media (max-width: 500px) {
    left: 5%;
    justify-content: space-between;
  }
`;
const TextContainer2 = styled.div`
  width: 70%;
  left: 10%;
  top: 50%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  @media (max-width: 768px) {
    top: 55%;
  }
  @media (max-width: 500px) {
    left: 5%;
    justify-content: space-between;
  }
`;
const BoldTextImg = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const Textimg = styled.p`
  font-size: 12px;
  color: white;
`;
const Cash = styled.p`
  font-size: 16px;
  color: #ffbe00;
  font-weight: bold;
`;
const TimeCont = styled.div`
  background-color: #b78648;
  color: white;
  font-size: 12px;
  border-radius: 10px 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px;
`;
const TimeCont2 = styled.div`
  background-color: #d7c860;
  color: white;
  font-size: 12px;
  border-radius: 10px 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px;
`;
