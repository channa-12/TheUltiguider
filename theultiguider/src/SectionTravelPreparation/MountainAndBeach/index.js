import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/hiking.jpg";

const MountainSection = styled.section`
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 48em) {
    padding: 2em;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85vw;
  margin: 40px 0;
  @media only Screen and (max-width: 52em) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2``;
const SubText = styled.p`
  margin-top: 5px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  height: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: #d9e4ec;
  @media only Screen and (max-width: 52em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

const BoxLeft = styled.div`
  width: 60%;
  height: 350px;
  margin: 20px;

  @media only Screen and (max-width: 52em) {
    width: 90%;
    height: auto;
  }
`;

const OrderList = styled.ol`
  line-height: 32px;
  margin-left: 50px;
`;

const BoxRight = styled.div`
  width: 30%;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only Screen and (max-width: 60em) {
    background-color: yellow;
    width: 30%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  @media only Screen and (max-width: 52em) {
    width: 50%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

const IMAGE = styled.img`
  max-width: 100%;
  // width: calc(16% + 30vw);
  // border-radius: 20px;
  // width: 300px;
  // height: 300px;
`;

const index = () => {
  return (
    <MountainSection>
      <MainContainer>
        <Title>Mountain</Title>
        <SubText>Preparing for the mountain explorer</SubText>
        <Wrap>
          <BoxLeft>
            <p>
              The idea of climbing a mountain can be exciting yet intimidating
              at the same time. You know that there???s a rewarding view and
              scenery when you get to the top, but you???re worried about the
              whole process and the climb itself. How do you prepare?{" "}
            </p>
            <OrderList>
              <li>Jog or do cardio before you climb.</li>
              <li>Read about the mountain you're going to climb.</li>
              <li>Waterproof your things whether rain or shine.</li>
              <li>Bring around two litres of water.</li>
              <li>Bring snacks high in carbs and protein.</li>
              <li>Stretch before the climb.</li>
              <li>Bring first aid kit.</li>
            </OrderList>
          </BoxLeft>
          <BoxRight>
            <IMAGE src={Image1} alt="firstKit" />
          </BoxRight>
        </Wrap>
      </MainContainer>
    </MountainSection>
  );
};

export default index;
