import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Container>
      <MyNavLink to="/" exact activeClassName="active">
        <Times>1-29 აპრილი</Times>
        Cash Games
      </MyNavLink>

      <MyNavLink to="/springseries" activeClassName="active">
        <Times>13-29 აპრილი</Times>
        Spring Series
      </MyNavLink>

      <MyNavLink to="/finalstage" activeClassName="active">
        <Times>30 აპრილი</Times>
        Final Stage
      </MyNavLink>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 30px;
  width: 100%;
`;
const MyNavLink = styled(NavLink)`
  height: 90px;
  color: white;
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 500px) {
    font-size: 16px;
    height: 60px;
  }

  &.active {
    background-color: #ef5a21;
    height: 95px;
    border-radius: 10px;
    @media (max-width: 500px) {
      font-size: 16px;
      height: 65px;
    }
  }
`;
const Times = styled.p`
  color: white;
  font-size: 10px;
  opacity: 80%;
`;
