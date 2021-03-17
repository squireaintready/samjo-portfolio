import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Technology({ name, image }) {
  return (
    <TechnologyContainer>
      <img src={image} alt="" />
      <Typography spacing={2} variant="subtitle1" align="center">
        {name}
      </Typography>
    </TechnologyContainer>
  );
}

export default Technology;

const TechnologyContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  > img {
    object-fit: contain;
    height: 6vh;
    width: 6vh;
    border-radius: 15px;
    &:hover{
      transform: scale(1.3);
    }
  }
  > .MuiTypography-root {
    padding-top: 2px;
    color: mix(#fff, #e91e63, 85%);
    font-size: 1rem;
    font-weight: 600;
    text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
      1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
      5px 13px 15px black;
  }
`;
