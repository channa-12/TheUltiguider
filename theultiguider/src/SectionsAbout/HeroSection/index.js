import React from "react";
import styled from "styled-components";
import TeamWork from "../../assets/teamwork.svg";
import Travels from "../../assets/travel.svg";

const HeroSection = styled.section`
  width: 100vw;
  height: 30vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #ffebe1;
  @media only Screen and (max-width: 48em) {
    height: auto;
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
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 40%;
  font-size: calc(2rem + 1vw);
  font-weight: 600;
  color: var(--secondarycolor);

  @media only Screen and (max-width: 48em) {
    width: 40%;
    justify-content: center;
    height: 35vw;
  }

  //   @media only Screen and (max-width: 40em) {
  //     margin: 0;
  //   }
`;

const TeamWorkSvg = styled.img`
  max-width: 30%;
  width: calc(16% + 20vw);
  height: auto;
  z-index: 7;

  @media only Screen and (max-width: 48em) {
    // align-self: flex-start;
    // position: absolute;
    // justify-content: center;
    // width: calc(30% + 20vw);
    opacity: 0.5;
    padding-left: 30px;
  }
  //   @media only Screen and (max-width: 40em) {
  //     display: none;
  //   }
`;

const TravelSvg = styled.img`
  max-width: 30%;
  width: calc(16% + 20vw);
  height: auto;
  z-index: 7;

  @media only Screen and (max-width: 48em) {
    // align-self: flex-end;
    // position: absolute;
    // bottom: 0;
    // width: calc(30% + 20vw);
    opacity: 0.5;
    padding-right: 30px;
  }
  //   @media only Screen and (max-width: 40em) {
  //     display: none;
  //   }
`;

const index = () => {
  return (
    <HeroSection>
      <MainContainer>
        <TeamWorkSvg
          src={TeamWork}
          alt="TeamWork"
          width="400"
          height="400"
        />

        <Middle> About Us </Middle>

        <TravelSvg src={Travels} alt="Travel" width="400" height="400" />
      </MainContainer>
    </HeroSection>
  );
};

export default index;
