import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Logos from '../components/logos';
import ArrowDown from '../components/arrowDown';
import Wave from '../components/wave'


const Hero = ({ className }) => {
  const { 
    hero: { image, title, subtitle }
  } = useStaticQuery(getHero)
  
  return (
    <BackgroundImage 
      className={className}
      fluid={image.fluid}
    >
      <HeroGroup>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <Logos />
        <ArrowDown />
        <Wave />
      </HeroGroup>
    </BackgroundImage>
  )
}


// query
const getHero = graphql`
  {
    hero: contentfulHero {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      subtitle
    }
  }
`


// styles
export const heroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);  /* starts down and goes up */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export default styled(Hero)`
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: rgba(0,0,0, 0.5) !important;
  opacity: 1 !important;
`

const HeroGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 180px 50px 150px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 20px;
  }

  h1 {
    margin: 0;
    color: white;
    font-size: 60px;
    line-height: 1.2;

    /* Animation */
    opacity: 0;
    animation: ${heroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.82, 0.2, 1);

    @media (max-width: 640px) {
      font-size: 40px;
    }
  }

  p {
    color: rgba(255, 255, 255, .8);
    font-size: 30px;
    line-height: 1.5;
    margin-bottom: 45px;

    /* Animation */
    opacity: 0;
    animation: ${heroAnimation};
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.82, 0.2, 1);

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }

  a {
    font-size: 17px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, .7);
    padding: 15px 10px;
    border: 1px solid rgba(255, 255, 255, .25);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);

    &:hover {
      background: white;
      color: black;
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
