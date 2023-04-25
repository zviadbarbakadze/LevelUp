import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WidelyUsed() {
  return <div>WidelyUsed</div>;
}
export const Container = styled.div`
  margin: 30px;
  background-color: #2c3234;
  border-radius: 10px;
  position: relative;
  padding: 0.5%;
`;
export const StickedCont = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;
export const BoldText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  color: white;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Image = styled.img`
  width: 20px;
  color: white;
`;
export const MediumText = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
`;
export const SmallText = styled.p`
  font-size: 14px;
  color: white;
  opacity: 80%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Stick = styled.div`
  background-color: #ef5a21;
  width: 30%;
  height: 4px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  position: absolute;
  top: 0;
  left: 35%;
`;
export const LeaderBoardContainer = styled.div`
  background-color: #171718;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  margin-bottom: 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #25292b;
  padding: 20px;
  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;
export const HeaderTitle = styled.span`
  font-size: 14px;
  opacity: 80%;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20%;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const MyLink = styled(Link)`
  color: #f05a22;
`;
export const InfoText = styled.p`
  font-size: 15px;
  color: white;
  opacity: 80%;
  text-align: center;
  padding-bottom: 5px;
`;
