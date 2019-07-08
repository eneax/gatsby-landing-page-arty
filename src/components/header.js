import { Link } from "gatsby"
import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import styled from 'styled-components'


const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${({ hasScrolled }) => hasScrolled && `
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(20px);
  `}
  

  @media (max-width: 640px) {
    padding: 15px 0;
  }

  /* Inner links */
  a {
    color: white;
    padding: 8px 20px;
    font-weight: 700;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.82, 0.2, 1);

    @media (max-width: 640px) {
      a:nth-child(4) {
        display: none;
      }
    }

    /* Hover effect */
    &:not(:first-child):hover {
      background: white;
      color: black;
      box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      transform: translateY(-3px);
    }
  }

  /* Inner btn */
  button {
    padding: 8px 20px;
    font-size: 20px;
    background: #56ccf2;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.82, 0.2, 1);

    /* Hover effect */
    &:hover {
      background: white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      transform: translateY(-3px);
    }
  }
`

const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;  /* by default everything is display column */
  grid-template-columns: repeat(4, auto);
  align-items: center;  /* vertically */
  justify-items: center;  /* horizontally */

  @media (max-width: 640px) {
    
  }
`


class Header extends React.Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    // get the data of where the user has scrolled
    const scrollTop = window.pageYOffset

    scrollTop > 50
    ? this.setState({ hasScrolled: true })
    : this.setState({ hasScrolled: false })
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <HeaderWrapper hasScrolled={this.state.hasScrolled}>
        <HeaderGroup>
          <Link to="/#top">
            <img
              src={require("../images/logo-designcode.svg")}
              width="30"
              alt=""
            />
          </Link>

          
            <Link to="/#courses">Courses</Link>
            <Link to="/#react">React for Designers</Link>

            <StripeCheckout
              amount={5000}
              image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
              token={this.handlePurchase}
              stripeKey={"pk_test_NfZKonMxPTdVX8vxFNUcyRpf00uXFC0iiI"}
            >
              <button>Buy</button>
            </StripeCheckout>
          
        </HeaderGroup>
      </HeaderWrapper>
    )
  }
}

export default Header
