import React from "react";
import styled from "styled-components";

// Material UI Components
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "@material-ui/core";

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <Link href="https://www.github.com/squireaintready" target="_blank" >
        <GitHubIcon/>
      </Link>
      <Link href="https://www.instagram.com/jamnssamn" target="_blank" >
        <InstagramIcon/>
      </Link>
      <Link href="https://www.linkedin.com/in/samuel-jo-b3ba2b1b5/" target="_blank" >
        <LinkedInIcon/>
      </Link>
      <Link href="https://www.facebook.com/sunghakjo" target="_blank" >
        <FacebookIcon/>
      </Link>
    </SocialMediaContainer>
  );
}

export default SocialMedia;

const SocialMediaContainer = styled.div`
  position: fixed;
  top: 40vh;
  left: 2%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  z-index: 99;

  > .MuiTypography-root > .MuiSvgIcon-root {
    color: lightskyblue;
    margin: 1px;
    &:hover {
      cursor: pointer;
      transform: skew(20deg);
      transform: scale(1.3);
    }
  }
`;
