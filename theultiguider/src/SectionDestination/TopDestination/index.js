import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import Card from "../../components/CardCategories/index";

const DestinationSection = styled.div`
  width: 100vw;
  height: 40;
  background-color: var(--navcolor);
  display: flex;
  padding: 40px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 52em) {
    height: auto;
    padding: 2em;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
  }
`;

const Title = styled.h1`
  // font-size: calc(2rem + 1vw);
  // line-height: 1.2;
  // text-align: center;
  // padding: 0.5rem 0;
  a {
    color: var(--black);
  }
`;
const SubText = styled.p`
  margin-top: 10px;
  // font-size: calc(0.5rem + 0.5vw);
  // color: var(--nav2);
`;

const CardWrap = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;

  @media only Screen and (max-width: 80em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only Screen and (max-width: 52em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only Screen and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const index = () => {
  return (
    <DestinationSection>
      <MainContainer>
        <Title>
          <Link to="/destination">
            Top Destination
            {/* <ArrowForwardIosIcon
              style={{ color: "#000000", marginLeft: "10" }}
            /> */}
          </Link>
        </Title>
        <SubText>Top destination you would choose for your vacation.</SubText>

        <CardWrap>
          <Link to="/destination/sub-destination" style={{ color: "#000000" }}>
            <Card image="angkor-wat-2" text="Angkor wat - Siem Reap"></Card>
          </Link>
          <Card
            image="sambor-prei-kuk-kampong-thom"
            text="Sambor Prei Kuk - Kampong Thom"
          ></Card>
          <Card image="lonely-beach" text="Lonely Beach - Sihanoukville"></Card>
          <Card
            image="banteay-chhmar-banteay-meanchey"
            text="Banteay Chhmar - Banteay Meanchey"
          ></Card>

          <Card image="mekong-river-kratie" text="Mekong River - Kratie"></Card>

          <Card
            image="phnom-penh-royal-palace"
            text="Royal Palace - Phnom Penh"
          ></Card>
          <Card
            image="rice-field-kampot"
            text="Rice Field - Kampot"
          ></Card>
          <Card
            image="mondulkiri"
            text="Mondulkiri Mountain - Mondulkiri"
          ></Card>
        </CardWrap>
      </MainContainer>
    </DestinationSection>
  );
};

export default index;
