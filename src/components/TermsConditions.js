import React from "react";
import styled from "styled-components";
import arrow from "../assets/Vector.svg";

export default function TermsConditions() {
  return (
    <Container>
      <Text>წესები და პირობები</Text>
      <Select>
        <SelectText>როდის იწყება და რა ფორმატით გაიმართება აქცია</SelectText>
        <Image src={arrow} alt="" />
      </Select>
      <Select>
        <SelectText>როგორ მივიღო აქციაში მონაწილეობა</SelectText>
        <Image src={arrow} alt="" />
      </Select>
      <Select>
        <SelectText>სხვადასხვა</SelectText>
        <Image src={arrow} alt="" />
      </Select>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 30px;
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
const SelectText = styled.p``;
const Image = styled.img`
  width: 20px;
  color: white;
`;
