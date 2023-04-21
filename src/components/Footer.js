import React from "react";
import TermsConditions from "./TermsConditions";
import styled from "styled-components";
import SimilarPromotions from "./SimilarPromotions";

export default function Footer() {
  return (
    <Container>
      <TermsConditions />
      <SimilarPromotions />
    </Container>
  );
}
const Container = styled.div`
  padding: 30px;
`;
