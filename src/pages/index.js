import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import cellData from "../data/cellData.json"
import Cell from "../components/cell";
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

    <Cards id="courses">
      <h2>20 courses, more coming</h2>
      <CardGroup>
        <Card />
      </CardGroup>
    </Cards>

    <Section 
      image={require("../images/wallpaper.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {cellData.cells.map((cell) => (
        <Cell
          key={cell.title}
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage


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

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
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

const Cards = styled.div`
  padding-top: 25px;

  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 640px) {
      margin-top: 65px;
    }
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
