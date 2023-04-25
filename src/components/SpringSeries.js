import React from "react";
import styled from "styled-components";
import Tournaments from "./Tournaments";
import LeaderBoard from "./LeaderBoard";
import ticket from "../assets/ticket-icon-big.png";

import {
  Stick,
  StickedCont,
  BoldText,
  Header,
  HeaderTitle,
  Icon,
  InfoText,
  LeaderBoardContainer,
  MyLink,
} from "./WidelyUsed";
import mechanic from "../assets/mechanic-icon.png";

import Gifts from "./Gifts";
import TournamentSatelites from "./TournamentSatelites";
import SpinPokerInfo from "./SpinPokerInfo";

export default function SpringSeries() {
  return (
    <>
      <MyContainer>
        <Tournaments />
        <Container>
          <InfoCont>
            <Stick></Stick>
            <StickedCont>
              <BoldText>მოხვდი ტოპ 20 ლიდერბორდში დაგროვებული ქულებით</BoldText>
            </StickedCont>
          </InfoCont>
          <LeaderBoardContainer>
            <PointsInfo>
              <PointsText>ქულების დაგროვების მექანიკა</PointsText>
              <MyIcon src={mechanic} alt="" />
            </PointsInfo>
            <Header>
              <HeaderTitle>ადგილი</HeaderTitle>
              <HeaderTitle>
                <Icon src={ticket} alt="" />
                ვაუჩერი
              </HeaderTitle>
              <HeaderTitle>პრიზი</HeaderTitle>
            </Header>

            <LeaderBoard />
            <Gifts />
            <MyInfo>
              <InfoText>
                *ლიდერბორდის შედეგები განახლდება <MyLink>პოკერის ლობიში</MyLink>
              </InfoText>
              <InfoText>
                *სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები
                და სატელიტები
              </InfoText>
            </MyInfo>
          </LeaderBoardContainer>
        </Container>
        <TournamentSatelites />
      </MyContainer>
      <SpinPokerInfo />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: #171718;
  display: flex;
  flex-direction: column;
  margin: 30px 0 30px 0;
  border-radius: 20px;
  border: 2px solid #25292b;
`;
const MyContainer = styled.div`
  margin: 30px;
  background-color: #1c1d1e;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoCont = styled.div`
  background-color: #2c3234;
  position: relative;
  text-align: center;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const PointsInfo = styled.div`
  background-color: #25292b;
  width: 250px;
  border-radius: 20px;
  border: 1px solid brown;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  margin-bottom: 10px;
`;
const PointsText = styled.p`
  color: white;
  font-size: 12px;
`;
const MyIcon = styled.img`
  width: 30px;
`;
const MyInfo = styled.div`
  padding: 10px;
`;
