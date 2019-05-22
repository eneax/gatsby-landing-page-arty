import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import staticData from "../../staticdata.json"
import Cell from "../components/cell";

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
      <h2>19 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Learn iOS 11 Design"
          text="11 sections"
          image={require("./../images/ios-design.jpeg")}
        />
        <Card
          title="Learn Sketch"
          text="21 sections"
          image={require("./../images/sketch.jpeg")}
        />
        <Card
          title="Learn Swift"
          text="19 sections"
          image={require("./../images/swift.jpeg")}
        />
        <Card
          title="Swift Advanced"
          text="22 sections"
          image={require("./../images/swift-advanced.jpeg")}
        />
        <Card
          title="Create a SpriteKit Game"
          text="9 sections"
          image={require("./../images/spritekit.jpeg")}
        />
        <Card
          title="Create a Sketch Plugin"
          text="7 sections"
          image={require("./../images/sketch-plugin.jpeg")}
        />
        <Card
          title="Motion Design in After Effects"
          text="8 sections"
          image={require("./../images/motion-ae.jpeg")}
        />
        <Card
          title="ARKit 2"
          text="11 sections"
          image={require("./../images/arkit.jpeg")}
        />
        <Card
          title="Video Editing in ScreenFlow"
          text="4 sections"
          image={require("./../images/screenflow.jpeg")}
        />
        <Card
          title="Sound Design with Cubase"
          text="5 sections"
          image={require("./../images/cubase.jpeg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./../images/react.jpeg")}
        />
        <Card
          title="Design System in Figma"
          text="10 sections"
          image={require("./../images/figma-design.jpeg")}
        />
        <Card
          title="Design and Code in Framer X"
          text="10 sections"
          image={require("./../images/framer-design.jpeg")}
        />
        <Card
          title="Animating in Principle"
          text="5 sections"
          image={require("./../images/principle.jpeg")}
        />
        <Card
          title="Create a Javascript Game"
          text="6 sections"
          image={require("./../images/js-game.jpeg")}
        />
        <Card
          title="Vue for Designers"
          text="11 sections"
          image={require("./../images/vue.jpeg")}
        />
        <Card
          title="React Native for Designers"
          text="12 sections"
          image={require("./../images/react-native.jpeg")}
        />
        <Card
          title="Unity for Designers"
          text="15 sections"
          image={require("./../images/unity.jpeg")}
        />
        <Card
          title="React Native for Designers Part 2"
          text="12 sections"
          image={require("./../images/react-native-two.jpeg")}
        />
      </div>
    </div>

    <Section 
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus quo officiis veniam fugit a ullam aliquam facilis minima? Eum quas, repellendus quos quidem id odio temporibus alias error recusandae."
    />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map((cell) => (
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
