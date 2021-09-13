import React from 'react'
import styled from "styled-components";
import HeroSection from "../SectionTravelPreparation/HeroSection/index";
import Info from "../SectionTravelPreparation/MountainAndBeach/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
`;

const TravelPreparation = () => {
    return (
        <Container>
            <HeroSection/>
            <Info/>
        </Container>
    )
}

export default TravelPreparation
