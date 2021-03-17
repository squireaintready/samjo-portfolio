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
        <Grid item xs={12} sm={6} md={6} lg={3} >
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
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <AboutRight>
            <Typography variant="h3" align="center">
              Hello world, <br />
              I'm Sam.
            </Typography>
            <hr />
            <AboutTextContainer>
              <Typography variant="body1" paragraph={true} align="center">
                I'm a self-taught developer and have been coding for a little over 4 years.
                My story began when I started downloading scripts for steam. Overtime, I started 
                writing/running my own scripts and discovered my passion for coding. I enjoy discovering
                and solving problems. My favorite problems are the ones difficult to spot until the 
                solution becomes "obvious". I'm most comfortable with the MERN stack. Recently Google 
                firebase has been my goto with their powerful firebase hooks, free hosting, intuitive UI, 
                and Cloud FirestoreDB live. I graduated with Economics, along a strong background in 
                mathematics and finance. I've worked full time since high school and was able to put myself 
                through university financially. I believe working at an early age taught me soft skills 
                such as heeding multiple tasks while managing time. I'm most definitely an early adopter 
                of new technologies, have an entrepreneurial spirit, and always willing to contribute in 
                anyway I can. Please feel free to send an email/text, lets chat.
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
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 5%;
  padding-right: 5%;
  filter: grayscale(30%);
  opacity: .9;
  background-size: cover;
  object-fit: contain;
  min-height: 60vh;
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
    border-bottom: 2px solid white;
  }
  >.MuiGrid-root{
    width: 100%;
  }
`;

const AboutTextContainer = styled.div`
  > .MuiTypography-root {
    line-height: 1.4;
    color: whitesmoke;
    font-weight: 600;
    
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
