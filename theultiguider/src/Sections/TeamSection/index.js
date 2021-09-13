import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/index";

const TeamSection = styled.div`
  width: 100vw;
  height: 40vw;
  background-color: var(--navcolor);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 80em) {
    height: auto;
    padding: 2em;
  }

  @media only Screen and (max-width: 52em) {
    height: auto;
  }

  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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
  margin-top: 10px;
  // font-size: calc(0.5rem + 0.5vw);
  // color: var(--nav2);
`;

const CardWrap = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;

  @media only Screen and (max-width: 80em) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;

const index = () => {
  return (
    <TeamSection>
      <MainContainer>
        <Title>Meet Our Team</Title>
        <SubText>Our expert team is made up with this explorer.</SubText>
        <CardWrap>
          <Card
            name="Chheng Pisey"
            text='" To the world of an incredible vacation. "'
            image="pisey"
          ></Card>
          <Card
            name="Thy Saonan"
            text='" To the world of an incredible vacation. "'
            image="saonan"
          ></Card>
          <Card
            name="Heng Voleak"
            text='" To the world of an incredible vacation. "'
            image="nai"
          ></Card>
          <Card
            name="Yong Vuthivann"
            text='" To the world of an incredible vacation. "'
            image="van"
          ></Card>
          <Card
            name="Ven Channa"
            text='" To the world of an incredible vacation. "'
            image="channa"
          ></Card>
        </CardWrap>
      </MainContainer>
    </TeamSection>
  );
};

export default index;
