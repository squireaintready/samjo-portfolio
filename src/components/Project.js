import React from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 410,
  },
  media: {
    height: 190,
  },
  paragraph: {
    height: 110,
  },
});

function Project({ title, image, cloneURL, git, text }) {
  const classes = useStyles();
  const linkToSite = () =>{
    window.open(cloneURL)
  }
  const linkToGit = () =>{
    window.open(git)
  }

  return (
    <ProjectContainer>
      <Card className={classes.root} onClick={linkToSite}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.paragraph}
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={linkToSite}>
              View More
          </Button>
          <Button size="small" color="primary" onClick={linkToGit}>
            Github
          </Button>
        </CardActions>
      </Card>
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  > .MuiPaper-root {
    background-image: linear-gradient(315deg, #8899A6 0%, #b3b3b3 74%);
    &:hover {
      border: 1px solid blue;
      /* border: 1px solid #b3b3b3; */
      /* transform: skew(20deg); */
      /* transform: scale(1.1); */
    }
  }
`;
