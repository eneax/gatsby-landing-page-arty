import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="hero">
      <div className="heroGroup">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>Complete courses about the best tools and design systems.</p>

        <Link to="/page-2/">Watch the video</Link>

        <div className="logos">
          <img src={require("../images/logo-sketch.png")} width="50" alt="" />
          <img src={require("../images/logo-figma.png")} width="50" alt="" />
          <img src={require("../images/logo-studio.png")} width="50" alt="" />
          <img src={require("../images/logo-framer.png")} width="50" alt="" />
          <img src={require("../images/logo-react.png")} width="50" alt="" />
          <img src={require("../images/logo-swift.png")} width="50" alt="" />
        </div>

        <Wave />
      </div>
    </div>

    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require("./../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("./../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("./../images/wallpaper4.jpg")}
        />
      </div>
    </div>

    <Section 
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus quo officiis veniam fugit a ullam aliquam facilis minima? Eum quas, repellendus quos quidem id odio temporibus alias error recusandae."
      
    />
  </Layout>
)

export default IndexPage
