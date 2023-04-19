import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.jpg";

export default function Header() {
  return (
    <MyHeader>
      <Image src={banner} alt="" />
      <TextContainer>
        <BoldText>
          მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
        </BoldText>
        <Text>მოხვდი პოკერის ფესტივალზე მალტაში</Text>
      </TextContainer>
    </MyHeader>
  );
}
const MyHeader = styled.div``;
const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
const TextContainer = styled.div`
  padding: 20px 30px;
`;
const BoldText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Text = styled.p`
  font-size: 16px;
  color: white;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
