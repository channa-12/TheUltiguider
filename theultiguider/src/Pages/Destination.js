import React from "react";
import styled from "styled-components";
import HeroSection from "../SectionDestination/HeroDestination/index";
import TopDestination from "../SectionDestination/TopDestination/index";
import Mountain from "../SectionDestination/BestMountain/index";
import Beach from "../SectionDestination/BestBeach/index";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
`;

const Destination = () => {
  return (
    <Container>
      <HeroSection />
      <TopDestination />
      <Mountain />
      <Beach />
    </Container>
  );
};

export default Destination;
