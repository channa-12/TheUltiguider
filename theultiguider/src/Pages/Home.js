import React from "react";
import styled from "styled-components";
import HeroSection from "../Sections/HeroSection/index";
import DestinationSection from "../Sections/DestinationSection/index";
import TeamSection from "../Sections/TeamSection/index";
import TravelPreparation from "./TravelPreparation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <DestinationSection />
      <TravelPreparation />
      <TeamSection />
    </Container>
  );
};

export default Home;
