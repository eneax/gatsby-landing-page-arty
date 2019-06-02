import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const HeroGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 20px;
  }
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="hero">

    <HeroGroup>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </HeroGroup>
    </div>
  </Layout>
)

export default NotFoundPage
