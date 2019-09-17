import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => {
  const { 
    notFound: { title, subtitle } 
  } = useStaticQuery(getNotFound)
  
  return (
    <Layout>
      <SEO title="404: Not found" />

      <ContentWrapper>
        <ContentGroup>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </ContentGroup>
      </ContentWrapper>

    </Layout>
  )
}

export default NotFoundPage


// query
const getNotFound = graphql`
  {
    notFound: contentfulNotFoundPage {
      title
      subtitle
    }
  }
`

// styles
const ContentWrapper = styled.div`
  background: rgba(0,0,0,.7);
  color: #fff;
`

const ContentGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 250px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 150px 20px;
  }
`
