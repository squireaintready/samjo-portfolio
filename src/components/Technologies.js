import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'
import uuid from 'react-uuid'
import Technology from './Technology'

// LOCAL IMAGES
import JavaImg from '../img/java.png'
import ReactImg from '../img/react.jpg'
import NodeImg from '../img/node.png'
import htmlImg from '../img/html.png'
import cssImg from '../img/css.png'
import javascriptImg from '../img/javascript.png'
import firebaseImg from '../img/firebase.png'
import jqueryImg from '../img/jquery.png'
import reduxImg from '../img/redux.png'
import gitImg from '../img/git.png'
import firestoreImg from '../img/firestore.png'
import materialUIImg from '../img/materialUI.png'
import npmImg from '../img/npm.png'
import postmanImg from '../img/postman.png'
import vscImg from '../img/vsc.png'
import vueImg from '../img/vue.png'
import mongoDBImg from '../img/mongoDB.png'
import sqlImg from '../img/sql.png'
import terminalImg from '../img/terminal.jpg'

function Technologies() {
  return (
    <TechnologiesContainer id="skills">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" paragraph={true} align="center">
            Tools & technologies I'm comfortable with.
          </Typography>
        </Grid>

        {technologies.map(({ name, image }) => (
          <Grid key={uuid()} container item xs={6} sm={4} md={4} lg={3} xl={3}>
            <Technology name={name} image={image} />
          </Grid>
        ))}
      </Grid>
    </TechnologiesContainer>
  )
}

export default Technologies

const TechnologiesContainer = styled.div`
  padding-top: 8%;
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;
  display: grid;
  place-items: center;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #000000 0%, #ffffff 74%); 
  > .MuiGrid-root {
    max-width: 60vw;
    > .MuiGrid-root > .MuiTypography-root {
      animation: text-shadow 1.5s ease-in-out infinite;
      font-size: 2em;
      font-weight: 900;
      line-height: 1;
      border-bottom: 2px solid whitesmoke;
      &:hover{
        animation-play-state: paused;
      }
    }
    @keyframes text-shadow {
    0% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }

    20% {  
        transform: translateY(-1em);
        text-shadow: 
            0 0.125em 0 #0c2ffb, 
            0 0.25em 0 #2cfcfd, 
            0 -0.125em 0 #fb203b, 
            0 -0.25em 0 #fefc4b;
    }

    40% {  
        transform: translateY(0.5em);
        text-shadow: 
            0 -0.0625em 0 #0c2ffb, 
            0 -0.125em 0 #2cfcfd, 
            0 0.0625em 0 #fb203b, 
            0 0.125em 0 #fefc4b;
    }
    
   60% {
        transform: translateY(-0.25em);
        text-shadow: 
            0 0.03125em 0 #0c2ffb, 
            0 0.0625em 0 #2cfcfd, 
            0 -0.03125em 0 #fb203b, 
            0 -0.0625em 0 #fefc4b;
    }

    80% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
}
  }
`

const technologies = [
  {
    "name": "HTML5",
    "image": htmlImg,
  },
  {
    "name": "CSS",
    "image": cssImg,
  },
  {
    "name": "Javascript",
    "image": javascriptImg,
  },
  {
    "name": "Vue",
    "image": vueImg,
  },
  {
    "name": "React",
    "image": ReactImg,
  },
  {
    "name": "Redux",
    "image": reduxImg,
  },
  {
    "name": "Material UI",
    "image": materialUIImg,
  },
  {
    "name": "Visual Studio Code",
    "image": vscImg,
  },
  {
    "name": "Git/Github",
    "image": gitImg,
  },
  {
    "name": "nodeJS",
    "image": NodeImg,
  },
  {
    "name": "Postman",
    "image": postmanImg,
  },
  {
    "name": "NPM",
    "image": npmImg,
  },
  {
    "name": "Firebase Hooks",
    "image": firebaseImg,
  },
  {
    "name": "Firestore DB",
    "image": firestoreImg,
  },
  {
    "name": "mySQL",
    "image": sqlImg,
  },
  {
    "name": "mongoDB",
    "image": mongoDBImg,
  },
  {
    "name": "Terminal",
    "image": terminalImg,
  },
  {
    "name": "Jquery",
    "image": jqueryImg,
  },
  {
    "name": "Java",
    "image": JavaImg,
  },
]
