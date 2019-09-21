import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FadeInSection from '../utils/fadeInSection'


const Cards = () => {
  const { 
    heading: { cardHeading }, 
    cards
  } = useStaticQuery(getCards)

  return (
    <CardsWrapper id='first'>
      <FadeInSection>
        <CardTitle>{cardHeading}</CardTitle>
      </FadeInSection>

      <CardGroup>
        {cards.edges.map(({ node }) => (
          <FadeInSection key={node.id}>
            <CardWrapper>
              <Img
                fixed={node.image.fixed}
                alt={`${node.title} card`}
              />
              <h3>{node.title}</h3>
              <p>{node.text}</p>
            </CardWrapper>
          </FadeInSection>
        ))}
      </CardGroup>
    </CardsWrapper>
  )
}

export default Cards


// query
const getCards = graphql`
  {
    heading: contentfulCardHeading {
      id: contentful_id
      cardHeading
    }
    cards: allContentfulCards(sort: {fields: title, order: ASC}) {
      edges {
        node {
          id: contentful_id
          title
          text
          image {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

// styles
const CardsWrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 40px;
`

const CardTitle = styled.h2`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #050a27 0%, #663399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
    margin-top: 65px;
  }
  @media (max-width: 400px) {
    font-size: 50px;
  }
  @media (max-width: 320px) {
    font-size: 40px;
    margin-top: 55px;
  }
`

const CardGroup = styled.div`
  max-width: 1060px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;
  padding-bottom: 50px;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardWrapper = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 320px) {
    width: 275px;
  }

  &:before {
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  /* Card hover effect */
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
  &:hover .gatsby-image-wrapper {
    transform: translateY(-20px);
  }

  /* Style img */
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    height: 110% !important;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h3 {
    color: white;
    font-size: 30px;
    margin: 20px 0 0 20px;
    width: 190px;
    z-index: 1;
  }

  p {
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    align-self: end;
    margin: 0 0 20px 20px;
    z-index: 1;
  }
`
