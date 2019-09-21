import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero';
import Cards from '../components/cards'
import Section from '../components/section'
import Cells from '../components/cells';


const IndexPage = () => (
  <Layout>
    <SEO title='Arty' keywords={[`gatsby`, `landing page`, `react`, `contentful`, `graphql`]} />

    <Hero />
    <Cards />
    <Section />
    <Cells />
  </Layout>
)

export default IndexPage
