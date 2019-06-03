import React from 'react'
import styled from 'styled-components'
import Wave from '../components/wave'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  
  @media (max-width: 640px) {
    height: 900px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  grid-gap: 20px;
  grid-template-rows: auto 100%;
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  position: relative;
  z-index: 2;
  color: white;  
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => (
	<SectionGroup image={props.image}>
    <WaveTop><Wave /></WaveTop>
    <WaveBottom><Wave /></WaveBottom>

		<SectionLogo src={props.logo} />

		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
		</SectionTitleGroup>
	</SectionGroup>
)

export default Section
