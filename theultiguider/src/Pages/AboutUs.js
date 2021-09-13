import React from "react";
import styled from "styled-components";
import HeroSection from "../SectionsAbout/HeroSection/index";
import Contact from "../SectionsAbout/Contact/index";
import Purpose from "../SectionsAbout/Purpose/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
`;

const AboutUs = () => {
  return (
    <Container>
      <HeroSection />
      <Purpose />
      <Contact />
    </Container>
  );
};

export default AboutUs;
