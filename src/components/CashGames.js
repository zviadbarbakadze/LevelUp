import React from "react";
import styled from "styled-components";
import exampleIcon from "../assets/example-icon.png";
import ticket from "../assets/ticket-icon-big.png";

import SpinPokerInfo from "./SpinPokerInfo";
import LeaderBoard from "./LeaderBoard";
import Gifts from "./Gifts";
import {
  Stick,
  Container,
  StickedCont,
  BoldText,
  LeaderBoardContainer,
  TextContainer,
  Icon,
  HeaderTitle,
  Info,
  InfoText,
  MyLink,
  Header,
} from "./WidelyUsed";

export default function CashGames() {
  return (
    <>
      <Container>
        <StickedCont>
          <Stick />
          <BoldText>1₾ რეიკი = 1 ქულას </BoldText>
        </StickedCont>
        <LeaderBoardContainer>
          <TextContainer>
            <Text>ჰოლდემის TOP20 ლიდერბორდი</Text>
            <Icon src={exampleIcon} alt="" />
          </TextContainer>
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
          <TextContainer>
            <Text>TOP20 ლიდერბორდი ჰოლდემში</Text>
            <Icon src={exampleIcon} alt="" />
          </TextContainer>
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
          <Info>
            <InfoText>
              *ლიდერბორდის შედეგები განახლდება <MyLink>პოკერის ლობიში</MyLink>
            </InfoText>
          </Info>
        </LeaderBoardContainer>
      </Container>
      <SpinPokerInfo />
    </>
  );
}

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
