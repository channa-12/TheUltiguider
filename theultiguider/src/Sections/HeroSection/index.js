import React from "react";
import CambodiaMap from "../../assets/cambodia.svg";
import CambodiaMap2 from "../../assets/Cambodia_map.png";
import styled from "styled-components";
import SearchBar from "../SearchBar/index";

const HeroSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
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
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 25px;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  align-items: start-first;
  width: 70%;
  align-items: center;
  line-height: 3;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 50em) {
    width: 80%;
    text-align: center;
    margin: 0;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
  }
  @media only Screen and (max-width: 40em) {
    margin: 0;
  }
`;

const CambodiaMapSvg = styled.img`
  max-width: 100%;
  width: calc(16% + 20vw);
  height: auto;
  z-index: 7;

  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  text-align: center;
  padding: 0.5rem 0;
`;
const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const index = () => {
  return (
    <HeroSection>
      <MainContainer>
        <CambodiaMapSvg
          src={CambodiaMap2}
          alt="Cambodia Map"
          width="400"
          height="400"
        />
        <RightBlock>
          <Title>Find the most exciting places with The Ultiguider</Title>
          <SubText>Ones a year, go someplace you've never been before.</SubText>
          <SearchBar />
        </RightBlock>
      </MainContainer>
    </HeroSection>
  );
};

export default index;
