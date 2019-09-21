import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import useAnimateOnScrolled from '../utils/animateOnScrolled'


const Navbar = () => {
  const hasScrolled = useAnimateOnScrolled()

  const {
    navbarLogo: { logoUrl, logo },
    navbarLinks
  } = useStaticQuery(getNavbar)

  return (
    <NavbarWrapper hasScrolled={hasScrolled}>
      <NavbarGroup>
        <Link to={logoUrl}>
          <Img
            fixed={logo.fixed}
            alt='main logo'
          />
        </Link>

        {navbarLinks.edges.map(({ node }) => (
          <Link 
            key={node.id}
            to={node.navbarItemUrl}
          >
            {node.navbarItemText}
          </Link>
        ))}
      </NavbarGroup>
    </NavbarWrapper>
  )
}

export default Navbar


// query
const getNavbar = graphql`
  {
    navbarLogo: contentfulNavbarLogo {
      logoUrl
      logo {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
    navbarLinks: allContentfulNavbarLinks(sort: {fields: createdAt}) {
      edges {
        node {
          id: contentful_id
          navbarItemUrl
          navbarItemText
        }
      }
    }
  }
`

// styles
const NavbarWrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${({ hasScrolled }) => hasScrolled && `
    background: rgba(0, 0, 0, 0.9);
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
    text-align: center;

    @media (max-width: 640px) {
      font-size: 15px;
      padding: 8px 10px;
    }
    @media (max-width: 320px) {
      font-size: 13px;
    }

    &:last-child {
      background: #39B6D5;

      @media (max-width: 640px) {
        margin-right: 10px;
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
`

const NavbarGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
  grid-gap: 10px;

  .gatsby-image-wrapper {
    width: 30px !important;
    height: 30px !important;
  }
`
