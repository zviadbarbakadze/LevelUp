import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.jpg";
import { useState, useEffect } from "react";
export default function Header() {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundColor("#000000");
      } else {
        setBackgroundColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MyHeader>
      <HeaderInfo backgroundColor={backgroundColor}>
        <SlotsTimes>
          <Slots>სლოტები</Slots>
          <Times>10 იანვარი - 12 მარტი</Times>
        </SlotsTimes>
        <CloseButton>x</CloseButton>
      </HeaderInfo>
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
const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  width: 70%;
  position: fixed;
  top: 0px;
  left: 15%;
  z-index: 1;
  background-color: ${(props) => props.backgroundColor};
  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
  }
`;
const SlotsTimes = styled.div`
  display: flex;
  background-color: #25292b;
  border-radius: 20px;
  padding: 10px;
`;
const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  color: white;
  background-color: #25292b;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Slots = styled.div`
  background-color: gray;
  width: 80px;
  height: 25px;
  font-size: 13px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
`;
const Times = styled.div``;
