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

// export const LeaderBoardContainer = styled.div`
//   background-color: #171718;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2%;
//   margin-bottom: 10px;
//   border-bottom-right-radius: 20px;
//   border-bottom-left-radius: 20px;
// `;
// export const TextContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
// `;
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
// export const Icon = styled.img`
//   width: 20px;
//   margin-right: 5px;
// `;

// export const Header = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
//   background-color: #25292b;
//   padding: 20px;
//   @media (max-width: 500px) {
//     justify-content: space-around;
//   }
// `;
// export const HeaderTitle = styled.span`
//   font-size: 14px;
//   opacity: 80%;
//   color: white;
//   display: flex;
//   align-items: center;
//   margin-right: 20%;
//   @media (max-width: 768px) {
//     margin-right: 0;
//   }
// `;

// export const Info = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
// `;
// export const MyLink = styled(Link)`
//   color: #f05a22;
// `;
// export const InfoText = styled.p`
//   font-size: 15px;
//   color: white;
//   opacity: 80%;
//   text-align: center;
//   padding-bottom: 5px;
// `;
