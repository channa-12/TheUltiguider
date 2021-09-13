import React from 'react'
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;
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
  justify-content: center;
  align-items: center;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 25px;
  }
`;

const index = () => {
    return (
        <div>
            
        </div>
    )
}

export default index
