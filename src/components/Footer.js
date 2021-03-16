import { Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="subtitle1" paragraph={true} align="center">
        Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you. Give me a shout by email if you'd like to get in contact with me. I also welcome bribes in the form of coffee, kbqq, and good old friendships.
      </Typography>
      <Typography variant="subtitle1" paragraph={true} align="center">
        © Copyright 2020 Samuel Jo | softdevsamjo@gmail.com
      </Typography>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background-color: #404040;
  background-image: linear-gradient(315deg, #8899A6 0%, #b3b3b3 74%);
  padding-top: 1em;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 1em;
  display: grid;
  place-items: center;
  > .MuiTypography-root{
    max-width: 70%;
    line-height: 100%;
  }
`;