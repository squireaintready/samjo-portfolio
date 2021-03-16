import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import Project from "./Project";

// LOCAL IMG FILES
import imgAirbnb from "../img/airbnb.png";
import imgHulu from "../img/hulu.png";
import imgSpotify from "../img/spotify.png";
import imgCovidTracker from "../img/covidtracker.png";
import imgGoogle from "../img/google.png";
import imgWhatsapp from "../img/whatsapp.png";
import imgMizumi from "../img/calculator.png";
import imgTiktok from "../img/tiktok.png";
import imgSlack from "../img/slack.png";
import imgDiscord from "../img/discord.png";


function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" paragraph={true} align="center">
            Please feel free to sample any projects.
          </Typography>
        </Grid>

        {projects.map(({ title, text, image, cloneURL, git }) => (
          <Grid key={uuid()} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Project
              title={title}
              text={text}
              image={image}
              cloneURL={cloneURL}
              git={git}
            />
          </Grid>
        ))}
      </Grid>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 8%;
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;
  background-image: linear-gradient(315deg, #8899a6 0%, #b3b3b3 74%);
  > .MuiGrid-root > .MuiGrid-root > .MuiTypography-root {
    color: mix(#fff, #e91e63, 85%);
    font-size: 2em;
    font-weight: 900;
    border-bottom: 2px solid whitesmoke;
    text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
      1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
      5px 13px 15px black;
  }
`;

const projects = [
  {
    title: "Google Clone",
    text:
      "Utilized Google custom search JSON API to return personalized search results. Reactjs for the frontend; Context API for data layering, material-ui, and firebase for hosting.",
    image: imgGoogle,
    cloneURL: "https://clone-56e6c.web.app/",
    git: "https://github.com/squireaintready/google-clone",
  },
  {
    title: "Hulu Clone",
    text:
      "Used the movie database API (TMDB) to return sorted movie objects. Reactjs for the frontend, functional components with hooks, react router, material UI, flexbox, and deployed on firebase hosting.",
    image: imgHulu,
    cloneURL: "https://hulu-clone-65a1a.web.app/",
    git: "https://github.com/squireaintready/hulu-clone",
  },
  {
    title: "Covid-19 Global Tracker",
    text:
      "Utilized Disease.sh API to retrieve/update live data, i.e. number of new cases, total recovered, and totals deaths. Leaflet API for maps, Chart.js for data visualization, and deployed on firebase hosting.",
    image: imgCovidTracker,
    cloneURL: "https://covid-19-tracker-31079.web.app/",
    git: "https://github.com/squireaintready/covid-tracker",
  },
  {
    title: "AirBnb Clone",
    text:
      "Datepicker API to return results based on user's travel/search date parameters. Reactjs for the front end, functional components with hooks, react-router, and flexbox. Deployed on Firebase hosting.",
    image: imgAirbnb,
    cloneURL: "https://airbnb-clone-9d9bd.web.app/",
    git: "https://github.com/squireaintready/airbnb-clone",
  },
  {
    title: "Whatsapp Clone",
    text:
      "Leveraged Google cloud firestoreDB for live db, firebase for hosting & google log in authentication. Functional components with hooks, react-router, context API, flexbox, and material UI.",
    image: imgWhatsapp,
    cloneURL: "https://whatsapp-clone-62615.web.app/",
    git: "https://github.com/squireaintready/whatsapp-clone",
  },
  {
    title: "Spotify Clone",
    text:
      "Used Spotify's amazing API for user authentication, getting users playlists, and play a sample. Reactjs for the front end with material-ui, and context API for data layering. Deployed on firebase hosting.",
    image: imgSpotify,
    cloneURL: "https://spotify-clone-3a930.web.app/",
    git: "https://github.com/squireaintready/spotify-clone",
  },
  {
    title: "Discord Clone",
    text:
      "Google cloud firestoreDB to store/retieve messages live. Firebase for user login/authentication and hosting. Used React.js for the frontend, materialUI, and redux for state mangement.",
    image: imgDiscord,
    cloneURL: "https://discord-clone-35080.web.app/",
    git: "https://github.com/squireaintready/discord-clone",
  },
  {
    title: "Mizumi Calculator",
    text:
      "Developed a tip calculator for a large restaurant(50+ employees) to aid with tips/wage distribution using an in-house algorithm. Built fully with vanilla Javascript and Jquery. This was my first production project.",
    image: imgMizumi,
    cloneURL: "https://squireaintready.github.io/advancedTip/",
    git: "https://github.com/squireaintready/advancedTip",
  },
  {
    title: "Slack Clone",
    text:
      "Utilized Google cloud firestore DB for live database. Firebase for user login/authentication and hosting. Frontend React.js, materialUI, flexbox, and context API.",
    image: imgSlack,
    cloneURL: "https://slack-clone-b635a.web.app/",
    git: "https://github.com/squireaintready/slack-clone",
  },
  // {
  //   title: "Tik-tok Clone",
  //   text:
  //     "Frontend React JS: Hooks, Flexbox, Material UI. Firebase database and hosting.",
  //   image: imgTiktok,
  //   cloneURL: "https://tiktok-clone-f9e09.web.app/",
  //   git: "https://github.com/squireaintready/tiktok-clone",
  // },
];
