import React from 'react'
import styled from "styled-components";
// import image from "../img/boulder.jpg";

function Welcome() {
  return (
    <WelcomeContainer>
      <img src='https://c4.wallpaperflare.com/wallpaper/790/672/980/black-white-lion-black-background-wallpaper-preview.jpg' alt=''/>
      WELCOME
    </WelcomeContainer>
  )
}

export default Welcome

const WelcomeContainer = styled.div`
  display: grid;
  place-items: center;

  > img {
    object-fit: contain;
    width: 60vw;
    border-radius: 20px;
  }
`