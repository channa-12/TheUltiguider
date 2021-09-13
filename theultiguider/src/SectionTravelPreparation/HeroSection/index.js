import React from "react";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import MountainOrBeachImg from "../../assets/mountainOrBeach.jpg";

const HeroSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
  //align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 25px;
  }
`;

// const NameBlock = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 60%;
//   line-height: 2;
//   color: var(--black);
//   position: relative;
//   @media only Screen and (max-width: 52em) {
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const Titles = styled.h1`
  margin-left: 10px;
  color: var(--black);
`;

const LinkPrepare = styled.div`
  font-size: calc(0.4rem + 0.5vw);
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 100%;
  height: 75%;
  // background-color: black;
  // position: absolute;
  // left: 50%;
  // bottom: 80%;
  // transform: translate(-50%);
  // border-radius: 50%;
  // background-color: var(--white);
  // background: url(${(props) => props.img});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: top;
  // filter: drop-shadow(0px -3px 3px #ced1d6);
`;

const index = () => {
  return (
    <HeroSection>
      <MainContainer>
        <LinkPrepare>
          <Link to="/">
            {" "}
            <KeyboardBackspaceIcon
              style={{ color: "#000", size: 10, marginTop: "5px" }}
            />{" "}
          </Link>
          <Link to="/">
            <Titles>Travel Preparation</Titles>
          </Link>
        </LinkPrepare>
        <Image>
          <img src={MountainOrBeachImg} alt="beach" />
        </Image>
      </MainContainer>
    </HeroSection>
  );
};

export default index;
