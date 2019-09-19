import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import Wave from '../components/wave'
import FadeInSection from '../utils/fadeInSection'


const Section = ({ className }) => {
  const { 
    section: { backgroundImage, logoImage, title, description }
  } = useStaticQuery(getSection)

  return (
    <BackgroundImage 
      id='second'
      className={className}
      fluid={backgroundImage.fluid}
    >
      <WaveTop><Wave /></WaveTop>
      <WaveBottom><Wave /></WaveBottom>

      <SectionLogo 
        fluid={logoImage.fluid} 
        alt={`${title} logo`}
      />

      <SectionGroup>
        <FadeInSection>
          <SectionTitle>{title}</SectionTitle>
        </FadeInSection>

        <FadeInSection>
          <SectionDescription>{description}</SectionDescription>
        </FadeInSection>
      </SectionGroup>
    </BackgroundImage>
  )
}


// graphql
const getSection = graphql`
  {
    section: contentfulSection {
      backgroundImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      logoImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      description
    }
  }
`

// styles
export default styled(Section)`
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  
  @media (max-width: 640px) {
    height: 900px;
  }
`

const SectionLogo = styled(Img)`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  grid-gap: 20px;
  grid-template-rows: auto 1fr;
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionDescription = styled.p`
  position: relative;
  z-index: 2;
  color: white;  
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`
