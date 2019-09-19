import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../utils/globalStyles'

import Navbar from './navbar'
import Footer from './footer'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
