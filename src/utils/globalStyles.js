import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    line-height: 1.3;
  }

  a {
    color: #5334f5;
    text-decoration: none;
    font-weight: 600;
  }

  /* Fade-In Animation */
  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1200ms ease-out, 
                transform 600ms ease-out,
                visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`
