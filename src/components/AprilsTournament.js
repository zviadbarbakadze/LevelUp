import React from "react";
import styled from "styled-components";

import {
  BoldText,
  Stick,
  StickedCont,
  Text,
  SmallText,
  InfoText,
  LeaderBoardContainer,
} from "./WidelyUsed";

import ticket from "../assets/poker-item-1-ticket-icon.png";
import tickets from "../assets/poker-item-2-ticket-icon.png";

export default function AprilsTournament() {
  return (
    <MyContainer>
      <Stick></Stick>
      <StickedCont>
        <BoldText>მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე</BoldText>
      </StickedCont>

      <LeaderBoardContainer>
        <GridContainer>
          <Rollers>
            <TextContainer>
              <Text>“Cashgame Highrollers” -</Text>
              <SmallText>1 საგზური</SmallText>
            </TextContainer>
            <Ticket1 src={ticket} alt="" />
          </Rollers>
          <Malta>
            <TextContainer>
              <Text>„The Festival in Malta, GTD“</Text>
              <Text>A კატეგორიის 1 საგზური</Text>
              <Text>B კატეგორიის 1 საგზური</Text>
              <Text>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </Text>
            </TextContainer>
            <Ticket2 src={tickets} alt="" />
          </Malta>
          <Grinders>
            <TextContainer>
              <Text>„Cashgame Grinders”</Text>
              <Text>1 საგზური</Text>
            </TextContainer>
            <Ticket1 src={ticket} alt="" />
          </Grinders>
          <Rings>
            <TextContainer>
              <Text>„The Lord of the Rings“</Text>
              <SmallText>C კატეგორიის 1 საგზური</SmallText>
              <SmallText>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </SmallText>
            </TextContainer>
            <Ticket1 src={ticket} alt="" />
          </Rings>
          <Sharks>
            <TextContainer>
              <Text>„Tournament Sharks“ -</Text>
              <Text>1 საგზური</Text>
            </TextContainer>
            <Ticket1 src={ticket} alt="" />
          </Sharks>
        </GridContainer>
        <MyInfo>
          <InfoText>
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </InfoText>
          <InfoText>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </InfoText>
        </MyInfo>
      </LeaderBoardContainer>
    </MyContainer>
  );
}
const MyContainer = styled.div`
  background-color: #2c3234;
  padding: 0.5%;
  position: relative;
  margin: 30px;
  border-radius: 10px;
`;
const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-areas:
    "rollers rollers rollers  malta malta malta"
    "rollers rollers rollers malta malta malta"
    "grinders grinders grinders malta malta malta"
    "grinders grinders grinders rings rings rings"
    "sharks sharks sharks rings rings rings"
    "sharks sharks sharks rings rings rings";
  @media (max-width: 768px) {
    grid-template-areas:
      "rollers rollers rollers  rollers rollers rollers"
      "rollers rollers rollers rollers rollers rollers"
      "grinders grinders grinders grinders grinders grinders"
      "grinders grinders grinders grinders grinders grinders"
      "sharks sharks sharks sharks sharks sharks"
      "sharks sharks sharks sharks sharks sharks"
      "malta malta malta malta malta malta"
      "malta malta malta malta malta malta"
      "malta malta malta malta malta malta"
      "rings rings rings rings rings rings"
      "rings rings rings rings rings rings"
      "rings rings rings rings rings rings";
  }
`;
const Rollers = styled.div`
  position: relative;
  background-color: #1e2122;
  color: white;
  border-radius: 5px;
  grid-area: rollers;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 300px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Malta = styled.div`
  position: relative;
  background-color: #1e2122;
  color: white;
  border-radius: 5px;
  grid-area: malta;
  padding: 20px;
`;
const Grinders = styled.div`
  position: relative;
  background-color: #1e2122;
  color: white;
  border-radius: 5px;
  grid-area: grinders;
  padding: 20px;
`;
const Rings = styled.div`
  position: relative;
  background-color: #1e2122;
  color: white;
  border-radius: 5px;
  grid-area: rings;
  padding: 20px;
`;
const Sharks = styled.div`
  position: relative;
  background-color: #1e2122;
  color: white;
  border-radius: 5px;
  grid-area: sharks;
  padding: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ticket1 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
const Ticket2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
