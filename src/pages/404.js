import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <ContentWrapper>
      <ContentGroup>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ContentGroup>
    </ContentWrapper>

  </Layout>
)

export default NotFoundPage


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
