import React from "react";
import styled from "styled-components";
import HeroSection from "../SectionSubDestination/HeroSection/index";
import History from "../SectionSubDestination/History/index";
import ThingsTD from "../SectionSubDestination/ThingsToDo/";
import RealatedPlace from "../SectionSubDestination/RelatedPlaces/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
`;

const SubDestination = () => {
  return (
    <Container>
      <HeroSection />
      <History />
      {/* <ThingsTD /> */}
      <RealatedPlace />
    </Container>
  );
};

export default SubDestination;
