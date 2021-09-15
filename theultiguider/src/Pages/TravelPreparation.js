import React from 'react'
import styled from "styled-components";
import HeroSection from "../SectionTravelPreparation/HeroSection/index";
import Info1 from "../SectionTravelPreparation/MountainAndBeach/index";
import Info2 from "../SectionTravelPreparation/BeachSection/index";

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
            <Info1/>
            <Info2/>
        </Container>
    )
}

export default TravelPreparation
