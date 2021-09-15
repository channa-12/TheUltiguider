import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/beachImage.jpg";

const MountainSection = styled.section`
  width: 100vw;
  height: 45vw;
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
  height: auto;
  @media only Screen and (max-width: 52em) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 10px;
  padding: 10px;
  background-color: #d9e4ec;
  @media only Screen and (max-width: 52em) {
    
    height: auto;
  }
`;

const BoxLeft = styled.div`
  // width: 60%;
  // height: 350px;
  // margin: 20px;

  // @media only Screen and (max-width: 52em) {
  //   width: 90%;
  //   height: auto;
  // }
`;

const BoxRight = styled.div`
  // width: 30%;
  // margin: 20px;
  // display: flex;
  // justify-content: flex-end;
  // align-items: center;

  // @media only Screen and (max-width: 60em) {
  //   background-color: yellow;
  //   width: 30%;
  //   margin: 0;
  //   align-items: center;
  //   justify-content: center;
  // }
  // @media only Screen and (max-width: 52em) {
  //   width: 50%;
  //   margin: 0;
  //   align-items: center;
  //   justify-content: center;
  // }
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
        <Wrap>
          <BoxLeft>
            <p>
              If you only know a little bit about Cambodia, chances are this
              massive temple is the image you have in your mind. Not simply
              known as one of the best temples in Cambodia – but rather the best
              – it’s high time you see this wonder of the world. Covered on
              every travel guide and ad for the country, it’s a must visit for
              any backpacker. For good reason too! The sheer size and intricacy
              of the structure stops visitors in their tracks. <br />
              <br /> The temple was built during the Angkor Empire by ruler
              Suryavarman II and represents the Mt Meru in Hinduism and the
              house of the gods. Carved into the walls of the temple are dancing
              Apsara figures, which are a part of Cambodia’s Hindu beliefs
              (Apsara dancing shows are a popular thing to see in Cambodia).{" "}
              <br />
              <br /> Angkor Wat is so important to the identity of Cambodia that
              it’s even featured on their national flag. So, while it’s a
              popular attraction, it’s crucial to be respectful when visiting.
              The temple has an etiquette guide, which suggests visitors cover
              their upper arms and knees (you cannot visit the highest level
              without doing so). Although it’s hot, covering up more might
              actually make you feel cooler! <br />
              <br /> When I went in 2014, my family and I had lunch with some
              local friends in a small village inside the walls of Angkor Wat.
              With local cuisine (like crickets) and fascinating stories (my
              friend talked about how he used to play among the ruins as a
              child), it was one of my most memorable and authentic travel
              experiences. Make friends with the locals, they are an incredibly
              hospitable people so who knows where it might get you! <br />
              <br /> <span style={{}}> Opening hours: </span> 5am – 5:30pm
              (upper level open at 7:30am) <br/><br/>
            </p>
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
