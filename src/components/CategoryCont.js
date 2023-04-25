import React from "react";
import styled from "styled-components";

import { Stick, StickedCont } from "./WidelyUsed";
import ticket from "../assets/final-item-ticket-icon.png";
import eventIcon from "../assets/final-item-event-icon.png";
import hotelIcon from "../assets/final-item-hotel-icon.png";
import moneyIcon from "../assets/final-item-money-icon.png";
import { Icon } from "./LeaderBoard";

export default function CategoryCont() {
  return (
    <CategoryContainer>
      <StickedCont>
        <Stick />
        <Text>1₾ რეიკი = 1 ქულას </Text>
      </StickedCont>
      <CategryItem>
        <Icon src={ticket} alt="" />
        <ItemText>ორმხრივი ავიაბილეთი</ItemText>
      </CategryItem>
      <CategryItem>
        <Icon src={eventIcon} alt="" />
        <ItemText>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</ItemText>
      </CategryItem>
      <CategryItem>
        <Icon src={eventIcon} alt="" />
        <ItemText>Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი</ItemText>
      </CategryItem>
      <CategryItem>
        <Icon src={hotelIcon} alt="" />
        <ItemText>სასტუმრო Golden Tulip Vivaldi Hotel</ItemText>
      </CategryItem>
      <CategryItem>
        <Icon src={moneyIcon} alt="" />
        <ItemText>€500 სახარჯი ფული</ItemText>
      </CategryItem>
    </CategoryContainer>
  );
}
export const CategoryContainer = styled.div`
  position: relative;
  background-color: #25292b;
  padding: 2%;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px 50px 50px 50px 50px 50px;
  grid-row-gap: 5px;
  border-radius: 5px;
`;
export const CategryItem = styled.div`
  background-color: #1c1d1e;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;
export const Text = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ItemText = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 10px;
`;
