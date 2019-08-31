import React from 'react'
import styled from 'styled-components'


const Logos = () => {
  return (
    <LogosWrapper>
      <img src={require("../images/logo-sketch.png")} width="50" alt="" />
      <img src={require("../images/logo-figma.png")} width="50" alt="" />
      <img src={require("../images/logo-studio.png")} width="50" alt="" />
      <img src={require("../images/logo-framer.png")} width="50" alt="" />
      <img src={require("../images/logo-react.png")} width="50" alt="" />
      <img src={require("../images/logo-swift.png")} width="50" alt="" />
    </LogosWrapper>
  )
}


const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 75px 0;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }


  /* Blur on Hover */
  &:hover {
    img {
      filter: blur(4px);

      &:hover {
        filter: blur(0);
        transform: scale(1.5);
      }
    }
  }
`


export default Logos
