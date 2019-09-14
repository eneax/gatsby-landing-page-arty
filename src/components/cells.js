import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Cells = () => {
  const { cells } = useStaticQuery(getCells)

  return (
    <CellGroupWrapper>
      {
        cells.edges.map(({ node }) => (
          <CellGroup key={node.id}>
            <CellImage>
              <Img fixed={node.image.fixed} />
            </CellImage>
            <CellTitle>{node.title}</CellTitle>
          </CellGroup>
        ))
      }
    </CellGroupWrapper>
  )
}


export default Cells


// query
const getCells = graphql`
  {
    cells: allContentfulCell(sort: {fields: title, order: ASC}) {
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
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`