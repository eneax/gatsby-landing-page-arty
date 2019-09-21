import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FadeInSection from '../utils/fadeInSection'


const Cells = () => {
  const { 
    heading: { cellHeading }, 
    cells 
  } = useStaticQuery(getCells)

  return (
    <>
      <FadeInSection>
        <CellsHeading>{cellHeading}</CellsHeading>
      </FadeInSection>

      <CellGroupWrapper>
        {
          cells.edges.map(({ node }) => (
            <FadeInSection key={node.id}>
              <CellGroup>
                <CellImage>
                  <Img fixed={node.image.fixed} />
                </CellImage>
                <CellTitle>{node.title}</CellTitle>
              </CellGroup>
            </FadeInSection>
          ))
        }
      </CellGroupWrapper>
    </>
  )
}


export default Cells


// query
const getCells = graphql`
  {
    heading: contentfulCellHeading {
      id: contentful_id
      cellHeading
    }
    cells: allContentfulCells(sort: {fields: title, order: ASC}) {
      edges {
        node {
          id: contentful_id
          title
          image {
            fixed(width: 60) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

// style
const CellsHeading = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #8C8CBA;
  text-align: center;
`

const CellGroupWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;

  .gatsby-image-wrapper {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    top: 5px;
    left: 5px;
  }
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`
