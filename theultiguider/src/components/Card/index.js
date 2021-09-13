import React from "react";
import styled from "styled-components";


const CARD = styled.div`
  height: calc(4rem + 12vw);
  width: calc(4rem + 12vw);
  positon: relative;
  background-color: var(--white);
  color: white;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media only Screen and (max-width: 52em){
    margin-top: calc(3rem + 5vw);
  }
`;

const Image = styled.div`
  width: 45%;
  height: 45%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: var(--white);
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px #ced1d6);
`;

const TEXT = styled.h4`
  color: var(--secondarycolor);
  padding: 0 calc(0.5rem + 0.5vw);
  text-align: center;
  font-size: calc(0.4rem + 0.4vw);
  margin-top: 35px;
`;

const NAME = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.6rem + 0.6vw);
  margin-top: 10px;
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;
