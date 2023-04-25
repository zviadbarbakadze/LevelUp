import React from "react";
import styled from "styled-components";
import CategoryCont, {
  CategoryContainer,
  CategryItem,
  ItemText,
  Text,
} from "./CategoryCont";

import { Stick } from "./WidelyUsed";
import { Icon } from "./LeaderBoard";
import ticket from "../assets/final-item-ticket-icon.png";
import eventIcon from "../assets/final-item-event-icon.png";
import hotelIcon from "../assets/final-item-hotel-icon.png";
import moneyIcon from "../assets/final-item-money-icon.png";

export default function Categories() {
  return (
    <Container>
      <CategoryCont />
      <CategoryCont />
      <CategoryContainer>
        <Stick />
        <Text>A კატეგორიის საგზურში შედის</Text>
        <CategryItem>
          <Icon src={ticket} alt="" />
          <ItemText>ორმხრივი ავიაბილეთი</ItemText>
        </CategryItem>
        <CategryItem>
          <Icon src={eventIcon} alt="" />
          <ItemText>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</ItemText>
        </CategryItem>

        <CategryItem>
          <Icon src={hotelIcon} alt="" />
          <ItemText>სასტუმრო</ItemText>
        </CategryItem>
        <CategryItem>
          <Icon src={moneyIcon} alt="" />
          <ItemText>€500 სახარჯი ფული</ItemText>
        </CategryItem>
      </CategoryContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
