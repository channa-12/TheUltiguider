import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const DestinationSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--navcolor);
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
  justify-content: start;
  align-items: start;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Title = styled.h1`
  // font-size: calc(2rem + 1vw);
  // line-height: 1.2;
  // text-align: center;
  // padding: 0.5rem 0;
  a{
    color: var(--black);
  }
`;
const SubText = styled.p`
  // font-size: calc(0.5rem + 0.5vw);
  // color: var(--nav2);
`;

const WIDGET = styled.div``;

const index = () => {
  return (
    <DestinationSection>
      <MainContainer>
        <Title>
          <Link to="/destination">
            Explore Top Destination
            <ArrowForwardIosIcon style={{ color: "#000000", marginLeft: "10" }} />
          </Link>
        </Title>
        <SubText>Top destination you would choose for your vacation.</SubText>

        <WIDGET></WIDGET>
      </MainContainer>
    </DestinationSection>
  );
};

export default index;
