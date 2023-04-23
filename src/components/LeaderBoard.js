import React from "react";
import styled from "styled-components";
import ticket from "../assets/ticket-icon-big.png";
import travel from "../assets/travel-icon-sm.png";
export default function LeaderBoard() {
  return (
    <Leaderboard>
      <LeaderboardItem>
        <Numb>1</Numb>
        <WhiteStick></WhiteStick>
        <Text>
          <Icon src={travel} alt="" />
          Aკატეგორიის საგზური
        </Text>
      </LeaderboardItem>
      <LeaderboardItem>
        <Numb>2</Numb>
        <WhiteStick></WhiteStick>
        <Text>
          <Icon src={ticket} alt="" />
          Bკატეგორიის საგზური
        </Text>
      </LeaderboardItem>
      <LeaderboardItem>
        <Numb>3</Numb>
        <Text>1500 ₾</Text>
        <Text>სპეც.ტურნირის ბილეთი</Text>
      </LeaderboardItem>
      <LeaderboardItem>
        <Numb>4</Numb>
        <Text>1300 ₾</Text>
        <Text>სპეც.ტურნირის ბილეთი</Text>
      </LeaderboardItem>
      <LeaderboardItem>
        <Numb>5</Numb>
        <Text>1200 ₾</Text>
        <Text>სპეც.ტურნირის ბილეთი</Text>
      </LeaderboardItem>
      <LeaderboardItem>
        <Numb>6</Numb>
        <Text>1000 ₾</Text>
        <Text>სპეც.ტურნირის ბილეთი</Text>
      </LeaderboardItem>
    </Leaderboard>
  );
}
const Leaderboard = styled.div`
  background-color: #25292b;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ef5a21;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ef5a21;
  }
`;
const LeaderboardItem = styled.div`
  background-color: #1e2122;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
`;
const Numb = styled.div`
  background-color: #2c3234;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 380px) {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
`;
const WhiteStick = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
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
export const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;
