import React from "react";
import styled from "styled-components";

// LOCAL IMAGES
import image from "../img/caliLove.jpg";
import waterfall from "../img/waterfall.jpg";

// MATERIAL UI COMPONENTS
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function About() {
  return (
    <AboutContainer id="about" style={{ backgroundImage: `url(${waterfall})` }}>
      {/* <BackgroundImg>
          <img src={waterfall} alt="" />
        </BackgroundImg> */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AboutLeft>
            {image ? (
              <img src={image} alt="" />
            ) : (
              <Skeleton
                duration={200}
                variant="circle"
                width={50}
                height={50}
              />
            )}
          </AboutLeft>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AboutRight>
            <Typography variant="h3" align="center">
              Hello world, <br />
              I'm Sam.
            </Typography>
            <hr />
            <AboutTextContainer>
              <Typography variant="body1" paragraph={true} align="center">
                I'm a self-taught developer and enjoy solving problems
                with unique solutions. who leans towards the MERN stack. I'm
                also in love Google firebase hooks and Cloud FirestoreDB. Prior
                to web development, I was an Economics graduate with a
                background in mathematics and finance. I've worked full time out
                of high school and put myself through university financially.
                Working at an early age taught me skills such as managing
                several tasks and managing time accordingly. I'm an early
                adopter when it comes to technologies, have an entrepreneurial
                spirit, and always willing to contribute in anyway I can. Please
                feel free to send an email/text, lets chat.
              </Typography>
            </AboutTextContainer>

            <Grid item xs={12} lg={12}>
              <PhoneContainer>
                <PhoneIcon fontSize="large" color="primary" />
                <Typography variant="body1" align="center">
                  917-292-4594
                </Typography>
              </PhoneContainer>
              <EmailContainer>
                <EmailIcon fontSize="large" color="primary" />
                <Typography variant="body1" align="center">
                  jo.sunghak@gmail.com
                </Typography>
              </EmailContainer>
            </Grid>
          </AboutRight>
        </Grid>
      </Grid>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  filter: grayscale(28%);
  opacity: .9;
  background-size: cover;
  object-fit: contain;
  min-height: 45vh;
  height: 100%;
`;

const AboutLeft = styled.div`
  display: grid;
  place-items: center;
  > img {
    object-fit: contain;
    max-width: 300px;
    border-radius: 1999px;
  }
`;
const AboutRight = styled.div`
  display: grid;
  place-items: center;
  filter: grayscale(0%) !important;
  > .MuiTypography-root {
    color: whitesmoke;
    font-weight: 700;
  }
  >.MuiGrid-root{
    width: 100%;
  }
`;

const AboutTextContainer = styled.div`
  > .MuiTypography-root {
    line-height: 1.4;
    color: #FFFAFA;
    font-weight: 800;
  }
`;

const PhoneContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 999px;
  margin: 0.2rem;
  background: -webkit-linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  background: -moz-linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  background: linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  > .MuiTypography-root {
    font-weight: 800;
    font-style: bold;
  }
`;
const EmailContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 999px;
  margin: 0.2rem;
  background: -webkit-linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  background: -moz-linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  background: linear-gradient(360deg, #1c1c1c 10%, #494949 360%);
  > .MuiTypography-root {
    font-weight: 800;
    font-style: bold;
  }
`;

// const BackgroundImg = styled.div`
//   position: absolute;
//   object-fit: contain;
//   right: 0;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   z-index: -1;
//   height: 45vh;
//   > img {
//     filter: grayscale(40%);
//     background-repeat: no-repeat;
//     background-size: contain;
//     object-fit: contain;
//     max-width: 150%;
//   }
// `;
