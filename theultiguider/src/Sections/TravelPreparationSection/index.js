import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TravelImagePrepare from "../../assets/travelEquipment.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TravelSection = styled.div`
  width: 100vw;
  height: 40vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 52em) {
    height: auto;
    display: block;
    padding: 40px 0;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  @media only Screen and (max-width: 52em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  align-items: start-first;
  width: 60%;
  line-height: 3;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 52em) {
    width: 60%;
    text-align: center;
    margin: 0;
    line-height: 2;
    align-items: center;
    justify-content: center;
  }
  @media only Screen and (max-width: 40em) {
    margin: 0;
  }
`;

const PreparationImg = styled.img`
  max-width: 100%;
  width: calc(16% + 30vw);
  height: auto;
  width="400"
  height="400"
`;

const Title = styled.h1`
  padding: 1.5rem 0;
  line-height: 1.5;
`;
const SubText = styled.p`
  line-height: 1.5;
`;

const LinkPrepare = styled.div`
  font-size: calc(0.4rem + 0.5vw);
  padding: 1.5rem 0;
`;

function TravelPrepare() {
  return (
    <TravelSection>
      <MainContainer>
        <PreparationImg
          src={TravelImagePrepare}
          alt="Travel Preparation"
          width="400"
          height="400"
        ></PreparationImg>
        <RightBlock>
          <Title>Travel Preparation</Title>
          <SubText>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            Neque porro quisquam est, qui dolorem.
          </SubText>
          <LinkPrepare>
            <Link to="/travel-preparation">
              {" "}
              See more <ArrowForwardIosIcon style={{ fontSize: 10 }} />{" "}
            </Link>
          </LinkPrepare>
        </RightBlock>
      </MainContainer>
    </TravelSection>
  );
}

export default TravelPrepare;
