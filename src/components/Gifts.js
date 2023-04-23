import React from "react";
import styled from "styled-components";
import ticket from "../assets/ticket-icon-big.png";
import travel from "../assets/travel-icon-sm.png";
export default function Gifts() {
  return (
    <SectionGifts>
      <GiftItem>
        <TravelIcon src={travel} alt="" />
        <Text>The Festival in Malta-ს საგზური</Text>
      </GiftItem>
      <GiftItem>
        <TravelIcon src={ticket} alt="" />
        <Text>
          სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც გათამაშდება The
          Festival in Maltas-ს საგზური
        </Text>
      </GiftItem>
      <GiftItem>
        <TravelIcon src={ticket} alt="" />
        <Text>ტექნიკის მაღაზიის ვაუჩერი</Text>
      </GiftItem>
    </SectionGifts>
  );
}
const SectionGifts = styled.div`
  background-color: #25292b;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`;
const GiftItem = styled.div`
  background-color: #202324;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 4px solid #202324;
  border-left-color: #ef5a21;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;
const TravelIcon = styled.img`
  width: 30px;
  margin-right: 20px;
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
