import { createGlobalStyle } from "styled-components";
import { theme, ThemeProps } from "./theme";

import bgImage from "../assets/images/bg-stars.jpg";

export const GlobalStyle = createGlobalStyle<ThemeProps>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    color: ${theme.color.yellow};
    background-color: ${theme.color.black};
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    position: relative;
    
    
    &.no-scroll {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-style: normal;
  }

  h1{
    font-size: 40px;
    @media (max-width: ${theme.screen.tablet}) {
      font-size: 20px;
    }
    @media (max-width: ${theme.screen.mobile}) {
      font-size: 16px;
    }
  }

  h2{
    font-size: 18px;
    @media (max-width: ${theme.screen.mobile}) {
      
      font-size: 14px;
    }
  }

  h3{
    font-weight: 500;
    font-size: 20px;
    @media (max-width: ${theme.screen.tablet}) {
      
      font-size: 18px;
    }
    @media (max-width: ${theme.screen.mobile}) {
      
      font-size: 16px;
    }
  }

  h4{
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .App {
    margin: 0 auto;
    text-align: center;
    min-height: 100%;
    height: auto;
    overflow-x: hidden;
    position: relative;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    @media (max-width: ${theme.screen.mobile}) {
      padding: 0 20px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
  
`;
