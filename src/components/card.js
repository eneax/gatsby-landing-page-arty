import React from 'react'
import "./card.css"

const Card = props => (
  <div className="card">
    <img src={props.image} alt=""/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
