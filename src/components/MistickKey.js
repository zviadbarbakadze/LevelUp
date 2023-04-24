import React from "react";
import styled from "styled-components";
import { Container, LeaderBoardContainer, Reick, Stick } from "./CashGames";
import { Leaderboard, Numb } from "./LeaderBoard";

export default function MistickKey() {
  return (
    <Container>
      <Stick></Stick>
      <Reick>
        <KeyText>მისტიური გასაღები </KeyText>
      </Reick>

      <LeaderBoardContainer>
        <TextContainer>
          <Text>
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </Text>
        </TextContainer>
        <MyContainer>
          <Leaderboard>
            <Item>
              <Numb>1</Numb>
              <Text>სპეციალური ტურნირი Cash Games Sharks || ადგილი</Text>
            </Item>
            <Item>
              <Numb>2</Numb>
              <Text>სპეციალური ტურნირი Cash Games Sharks || ადგილი</Text>
            </Item>
            <Item>
              <Numb>3</Numb>
              <Text>სპეციალური ტურნირი Cash Games Sharks || ადგილი</Text>
            </Item>
            <Item>
              <Numb>4</Numb>
              <Text>სპეციალური ტურნირი Cash Games Sharks ||| ადგილი</Text>
            </Item>
            <Item>
              <Numb>5</Numb>
              <Text>Holdem Grinders ლიდერბორდის გამარჯვებული</Text>
            </Item>
            <Item>
              <Numb>6</Numb>
              <Text>ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები</Text>
            </Item>
          </Leaderboard>
        </MyContainer>
      </LeaderBoardContainer>
    </Container>
  );
}
export const MyContainer = styled.div`
  background-color: #25292b;
  width: 100%;
  padding: 2%;
  border-radius: 10px;
`;
const TextContainer = styled.div`
  padding: 20px;
`;
const KeyText = styled.p`
  font-family: "Sofia", sans-serif;
  font-size: 30px;
  color: #f7971e;
  letter-spacing: 5px;
  font-weight: bolder;
  text-align: center;
`;
const Text = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 15px;
`;
const Item = styled.div`
  background-color: #1e2122;
  border-radius: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
`;
