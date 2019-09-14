import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"
import Section from "../components/section"
import Wave from "../components/wave"
import Cells from "../components/cells";
import Hero from "../components/hero";
import Logos from "../components/logos";
import ArrowDown from "../components/arrowDown";


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero
      img={data.desktop.childImageSharp.fluid}
    >
      <h1>
        Learn to <br /> design and code React apps
      </h1>
      <p>Complete courses about the best tools and design systems.</p>

      <Logos />
      <ArrowDown />
      <Wave />
    </Hero>

    <Cards />

    <Section 
      image={require("../images/wallpaper.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <Cells />
  </Layout>
)

export default IndexPage


// query
export const query = graphql`
  {
    desktop: file(relativePath: { eq: "wallpaper3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
