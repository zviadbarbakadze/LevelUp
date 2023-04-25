import React from "react";
import styled from "styled-components";
import arrow from "../assets/Vector.svg";
import { BoldText, Text, Image } from "./WidelyUsed";

export default function TermsConditions() {
  return (
    <Container>
      <BoldText>წესები და პირობები</BoldText>
      <Select>
        <Text>როდის იწყება და რა ფორმატით გაიმართება აქცია</Text>
        <Image src={arrow} alt="" />
      </Select>
      <Select>
        <Text>როგორ მივიღო აქციაში მონაწილეობა</Text>
        <Image src={arrow} alt="" />
      </Select>
      <Select>
        <Text>სხვადასხვა</Text>
        <Image src={arrow} alt="" />
      </Select>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.div`
  background-color: #25292b;
  font-size: 15px;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
`;
