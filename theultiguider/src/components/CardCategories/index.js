import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const CARD = styled.div`
  height: calc(11rem + 12vw);
  width: calc(7rem + 12vw);
  margin-top: calc(0.5rem + 3vw);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 52em) {
    margin-top: calc(3rem + 5vw);
  }

  @media only Screen and (max-width: 420px) {
    margin-top: calc(2rem + 5vw);
  }
`;

const IMAGE = styled.img`
  width: 100%;
  height: 100%;
  //transform: translate(-50%);
  //border-radius: 10px;
  background-color: var(--white);
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const WrapText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2;
  margin-top: 10px;
  `;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TEXT = styled.h5``;

const index = ({ image, text }) => {
  const img = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <IMAGE img={img} />
      <WrapText>
        <Wrap>
          <LocationOnIcon fontSize='small'/>
          <TEXT>{text}</TEXT>
        </Wrap>
      </WrapText>
    </CARD>
  );
};

export default index;
