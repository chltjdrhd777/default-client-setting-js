import React from 'react';
import { createGlobalStyle } from 'styled-components';
import WitneyLight from 'assets/fonts/whitneylight.woff';
import WitneyMedium from 'assets/fonts/whitneymedium.woff';
import WitneyBold from 'assets/fonts/whitneybold.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Whitney Light";
    src: local("Whitney Light"), url(${WitneyLight}) format("woff");
    font-size: normal;
  }

  @font-face {
    font-family: "Whitney Medium";
    src: local("Whitney Medium"), url(${WitneyMedium}) format("woff");
    font-size: normal;
  }

  @font-face {
    font-family: "Whitney Bold";
    src: local("Whitney Bold"), url(${WitneyBold}) format("woff");
    font-size: normal;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }

  body {
      font-size : 2rem;
      font-family: 'Whitney Light', sans-serif;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style-type: none;
  }
`;

export default GlobalStyles;
