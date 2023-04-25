import React from "react";
import styled from "styled-components";
import { Stick } from "./WidelyUsed";
export default function SpinPokerInfo() {
  return (
    <Container>
      <Stick></Stick>
      <BoldText>
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE
        ლიდერბორდი
      </BoldText>
      <Text>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </Text>
    </Container>
  );
}
const Container = styled.div`
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 94%;
  position: relative;
  margin-left: 3%;
  border-radius: 10px;
`;

const BoldText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Text = styled.p`
  color: white;
  opacity: 80%;
  font-style: 12px;
`;
