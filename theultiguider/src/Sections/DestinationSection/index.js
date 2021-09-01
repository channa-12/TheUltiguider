import React from 'react';
import styled from 'styled-components';

const DestinationSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const index = () => {
    return (
        <DestinationSection>
            Destination Section
        </DestinationSection>
    )
}

export default index
