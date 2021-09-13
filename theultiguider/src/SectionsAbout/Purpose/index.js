import React from "react";
import styled from "styled-components";
import WorkSpace from "../../assets/workspace.svg";

const PurposeSection = styled.div`
  width: 100vw;
  height: 30vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 72em){
    height: auto;
    padding: 40px 0;
  }
  @media only Screen and (max-width: 52em) {
    height: auto;
    display: block;
    padding: 40px 0;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
  }
`;



const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;

  @media only Screen and (max-width: 52em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
  }
`;


const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: start-first;
  width: 60%;
  line-height: 2;
  color: var(--black);
  position: relative;
  @media only Screen and (max-width: 52em) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h2`
  // font-size: calc(2rem + 1vw);
  // line-height: 1.2;
  // text-align: center;
  // padding: 0.5rem 0;

`;

const Descriptions = styled.p`
  padding: 20px;
`;

const Images = styled.img`
  max-width: 100%;
  width: calc(16% + 20vw);
  height: auto;
  padding: 20px;
  z-index: 7;

  @media only Screen and (max-width: 48em) {
    // align-self: flex-start;
    // position: absolute;
    // bottom: 0;
    // opacity: 0.5;
    width: calc(30% + 20vw);
  }
`;

const index = () => {
  return (
    <PurposeSection>
      <MainContainer>
        <LeftBlock>
          <Title>Every place needs The Ultiguider</Title>
          <Descriptions>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </Descriptions>
        </LeftBlock>
        <Images src={WorkSpace} alt="Cambodia Map" width="400" height="400" />
      </MainContainer>
    </PurposeSection>
  );
};

export default index;
