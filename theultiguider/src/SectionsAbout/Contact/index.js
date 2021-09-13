import React from "react";
import styled from "styled-components";

const ContactSection = styled.div`
  width: 100vw;
  height: 20vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: var(--background);
  @media only Screen and (max-width: 52em) {
    height: auto;
    padding: 40px 0;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
  }
`;



const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 90vw;

  @media only Screen and (max-width: 52em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height:auto;
    padding: 0 30px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;
const SubText = styled.p`
  // font-size: calc(0.5rem + 0.5vw);
  // color: var(--nav2);
`;

const index = () => {
  return (
    <ContactSection>
      <MainContainer>
        <Title>Contact Us</Title>
        <SubText>
          Need help, or just have a general question about Travelling?
        </SubText>
        <SubText>Contact us to get in touch with us.</SubText>
        <SubText style={{ marginTop: "20px" }}>
          Phone number: 012 345 678
        </SubText>
        <SubText>Email: theultiguider@gmail.com</SubText>
      </MainContainer>
    </ContactSection>
  );
};

export default index;
