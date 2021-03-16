import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  return (
    <HeaderContainer>
      <Grid container>
        <InnerContainer>
          <LeftContainer>
            <h1 onClick={scrollToTop}>Samuel Jo</h1>
          </LeftContainer>
          <RightContainer>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button>About</Button>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <Button>Projects</Button>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button>Skills</Button>
            </Link>
          </RightContainer>
        </InnerContainer>
      </Grid>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  top: 0;
  position: sticky;
  z-index: 99;
  background-color: #404040;
  background-image: linear-gradient(315deg, #8899a6 0%, #b3b3b3 74%);
  /* background-image: linear-gradient(315deg, #B3B3B3 0%, #ffffff 74%);  */
  /* border-bottom: 2px solid black; */
`;

const InnerContainer = styled.div`
  display: flex;
  z-index: 99;
  align-items: center;
  justify-content: space-between;
  width: 100% !important;
`;

const LeftContainer = styled.div`
  > h1 {
    margin: 2px;
    padding: 8px;
    border-radius: 15px;
    /* font-size: 3vh; */
    font-size: calc(1.5vh + 1.5vw);
    box-shadow:10px 26px 18px 0px rgba(0,0,0,0.75);
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    font-weight: 500;
    z-index: 99;
    &:hover {
      cursor: pointer;
      text-shadow: #fff 0 0 4px, #fcffbb 0 0 20px;
      margin-left: -30px;
      transition: margin-left 1s cubic-bezier(0, 0.75, 0, 1);
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  > a > button {
    margin: 6px;
    padding: 6px;
    border-radius: 15px;
    box-shadow:10px 26px 18px 0px rgba(0,0,0,0.75);
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    /* font-size: 1vh; */
    font-size: calc(1vh + 0.6vw);
    font-weight: 500;
    text-transform: inherit !important;
    z-index: 99;

    &:hover {
      cursor: pointer;
      text-shadow: #fff 0 0 4px, #fcffbb 0 0 20px;
      transform: rotateY(-60deg);
      transition: transform 2.3s cubic-bezier(0, 0.75, 0, 1),
        text-shadow 0.1s ease-in;
    }
  }
`;
