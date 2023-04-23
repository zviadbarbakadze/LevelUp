import React from "react";
import styled from "styled-components";
import exampleIcon from "../assets/example-icon.png";
import ticket from "../assets/ticket-icon-big.png";
import { Link } from "react-router-dom";
import SpinPokerInfo from "./SpinPokerInfo";
import LeaderBoard from "./LeaderBoard";
import Gifts from "./Gifts";

export default function CashGames() {
  return (
    <>
      <Container>
        <Stick></Stick>
        <Reick>
          <TextReick>1₾ რეიკი = 1 ქულას </TextReick>
        </Reick>
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
            <Text>
              *ლიდერბორდის შედეგები განახლდება <MyLink>პოკერის ლობიში</MyLink>
            </Text>
          </Info>
        </LeaderBoardContainer>
      </Container>
      <SpinPokerInfo />
    </>
  );
}
const Container = styled.div`
  margin: 30px;
  background-color: #2c3234;
  border-radius: 10px;
  position: relative;
`;
const Reick = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const TextReick = styled.p`
  color: white;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
`;
const Stick = styled.div`
  background-color: #ef5a21;
  width: 30%;
  height: 4px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  position: absolute;
  top: 0;
  left: 35%;
`;
const LeaderBoardContainer = styled.div`
  background-color: #171718;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const Header = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #25292b;
  padding: 20px;
  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;
const HeaderTitle = styled.span`
  font-size: 14px;
  opacity: 80%;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20%;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const MyLink = styled(Link)`
  color: #f05a22;
`;
