import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'


const Logos = () => {
  const { logos } = useStaticQuery(getLogos)

  return (
    <LogosWrapper>
      {logos.edges.map(({ node }) => (
        <Img
          key={node.id} 
          fixed={node.image.fixed}
          alt={`${node.title} logo`}
        />
      ))}

    </LogosWrapper>
  )
}

export default Logos


// query
const getLogos = graphql`
  {
    logos: allContentfulLogos(sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          id: contentful_id
          title
          image {
            fixed(width: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

// styles
const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin: 75px 0;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Blur on Hover */
  &:hover {
    .gatsby-image-wrapper {
      filter: blur(4px);
    }
  }

  /* Scale hovered img */
  .gatsby-image-wrapper {
    transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      filter: blur(0);
      transform: scale(1.5);
    }
  }
`
