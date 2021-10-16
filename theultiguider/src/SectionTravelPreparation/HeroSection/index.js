import React from "react";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import MountainOrBeachImg from "../../assets/mountainOrBeach.jpg";

const HeroSection = styled.section`
  width: 100vw;
  height: 53vw;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 48em) {
    height: auto;
    display: block;
  }

  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  //align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 85vw;
  margin-bottom: 20px;
  @media only Screen and (max-width: 48em) {
    align-items: left;
    margin-left: auto;
    margin-right: auto;
    // width: 100vw;
    margin-top: 20px;
  }
`;


const Titles = styled.h1`
  margin-left: 10px;
  color: var(--black);
`;

const LinkPrepare = styled.div`
  font-size: calc(0.4rem + 0.5vw);
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  text-align: center;
  @media only Screen and (max-width: 48em) {
    margin: 0;
    font-size: calc(0.5rem + 0.7vw);
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  // width: calc(70% + 20vw);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const index = () => {
  return (
    <HeroSection>
      <MainContainer>
        <LinkPrepare>
          <Link to="/">
            {" "}
            <KeyboardBackspaceIcon style={{ color: "#000", marginTop:'6px' }} />{" "}
          </Link>
          <Link to="/">
            <Titles>Travel Preparation</Titles>
          </Link>
        </LinkPrepare>

        <Image src={MountainOrBeachImg} alt="beach" />
      </MainContainer>
    </HeroSection>
  );
};

export default index;
