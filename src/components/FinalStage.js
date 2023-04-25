import React from "react";
import styled from "styled-components";

import { Container, LeaderBoardContainer } from "./WidelyUsed";
import finalbanner from "../assets/final-info-img.jpg";
import { GiftItem } from "./Gifts";
import Categories from "./Categories";
import AprilsTournament from "./AprilsTournament";
import MistickKey from "./MistickKey";

export default function FinalStage() {
  return (
    <>
      <Container>
        <LeaderBoardContainer>
          <BannerDiv></BannerDiv>

          <Text>ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!</Text>
          <Text>
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </Text>
          <GiftItem>
            <Text>
              15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
            </Text>
          </GiftItem>
          <Categories />
        </LeaderBoardContainer>
      </Container>
      <AprilsTournament />
      <MistickKey />
    </>
  );
}
const BannerDiv = styled.div`
  background-image: url(${finalbanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 98%;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  font-size: 14px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
