import React from "react";
import styled from "styled-components";

// Material UI Components
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, Typography } from "@material-ui/core";

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="subtitle1" paragraph={true} align="center">
        Have a project for me? Think I'd be a good fit for your team? I'd love
        to hear from you. Give me a shout by email if you'd like to get in
        contact with me. I also welcome bribes in the form of coffee, kbqq, and
        good old friendships.
        <br />
        jo.sunghak@gmail.com
      </Typography>
      <SocialMediaContainer>
        <Link href="https://www.github.com/squireaintready" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="https://www.instagram.com/jamnssamn" target="_blank">
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samuel-jo-b3ba2b1b5/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link href="https://www.facebook.com/sunghakjo" target="_blank">
          <FacebookIcon />
        </Link>
      </SocialMediaContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #404040;
  background-image: linear-gradient(315deg, #8899a6 0%, #b3b3b3 74%);
  padding-top: 1em;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 1em;
  display: grid;
  place-items: center;
  > .MuiTypography-root {
    max-width: 70%;
    line-height: 100%;
    font-weight:200;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  z-index: 99;

  > .MuiTypography-root > .MuiSvgIcon-root {
    color: lightskyblue;
    margin-left: 4px;
    margin-right: 4px;
    &:hover {
      cursor: pointer;
      transform: skew(20deg);
      transform: scale(1.5);
    }
  }
`;
