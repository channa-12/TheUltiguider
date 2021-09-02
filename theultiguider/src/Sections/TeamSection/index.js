import React from "react";
import styled from "styled-components";

const TeamSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--navcolor);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  display: block;
  text-align: center;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Title = styled.h1`
  // font-size: calc(2rem + 1vw);
  // line-height: 1.2;
  // text-align: center;
  // padding: 0.5rem 0;
`;
const SubText = styled.p`
  // font-size: calc(0.5rem + 0.5vw);
  // color: var(--nav2);
`;

const index = () => {
  return (
    <TeamSection>
      <MainContainer>
        <Title>Meet Our Team</Title>
        <SubText>Our expert team is made up with this explorer.</SubText>
      </MainContainer>
    </TeamSection>
  );
};

export default index;
