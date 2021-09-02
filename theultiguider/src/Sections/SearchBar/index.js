import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";
import PinDropIcon from "@material-ui/icons/PinDrop";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  margin-top: 4rem;
  background-color: var(--white);
  justify-content: center;
  border-radius: 60px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;

  @media only Screen and (max-width: 70em) {
    align-item: center;
    bottom: 0;
    width: calc(30% + 40vw);
    margin-top: 2rem;
  }
`;

const SearchInputContainer = styled.div`
    width: 100%
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 80%;
  outline: none;
  border: none;
  font-size: calc(0.5rem + 0.5vw);
  color: var(--black);
  font-weight: 500;
  background-color: transparent;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const LocationIcons = styled.span`
  color: var(--primarycolor);
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const SearchIcons = styled.span`
  color: var(--primarycolor);
  font-size: 27px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--secondarycolor);
  }
`;

// const CloseIcons = styled.span`
//   color: var(--primarycolor);
//   font-size: 30px;
//   vertical-align: middle;
//   transition: all 200ms ease-in-out;
//   cursor: pointer;

//   &:hover {
//     color: var(--secondarycolor);
//   }
// `;

// const TOP = styled.div`
//   position: absolute;
//   display: flex;
//   font-size: calc(0.4rem + 0.5vw);
// `;

function SearchBar() {
  // const [Icon, setIcon] = useState(false);

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        {/* <TOP>
          Location <ExpandMoreIcon />{" "}
        </TOP> */}
        <LocationIcons>
          <PinDropIcon />
        </LocationIcons>
        <SearchInput placeholder="Phnom Penh" />
        <SearchIcons>
          <SearchIcon />
        </SearchIcons>
        {/* <CloseIcons><CloseIcon /></CloseIcons> */}
      </SearchInputContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;
