import React from 'react'
import CardStyles from './styles/cardStyles'

const Card = props => (
  <CardStyles>
    <img src={props.image} alt=""/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </CardStyles>
)

export default Card
