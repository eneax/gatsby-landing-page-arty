import { Link } from "gatsby"
import React from "react"
import "./header.css"

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

  render() {
    return(
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="headerGroup">
          <Link to="/"><img src={require("../images/logo-designcode.svg")} width="30" alt=""/></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
