import { Link } from "gatsby"
import React from "react"
import "./header.css"
import StripeCheckout from 'react-stripe-checkout'

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
      <div
        className={
          this.state.hasScrolled ? "header headerScrolled" : "header"
        }
      >
        <div className="headerGroup">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg")}
              width="30"
              alt=""
            />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>

          <StripeCheckout
            amount={5000}
            image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
            token={this.handlePurchase}
            stripeKey={"pk_test_NfZKonMxPTdVX8vxFNUcyRpf00uXFC0iiI"}
          >
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header
