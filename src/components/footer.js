import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const Footer = () => {
  const { 
    footer: { text, downloadButton, downloadButtonText }, 
    links, 
    copyright: { copyrightText, copyrightUrl, copyrightUrlText },
  } = useStaticQuery(getLink)

  return (
    <FooterGroup id='third'>
      <React.Fragment key={downloadButton}>
        <Text>{text}</Text>
        <DownloadBtn 
          href={downloadButton}
          target='_blank'
          rel='noopener noreferrer'
        >
          {downloadButtonText}
        </DownloadBtn>
      </React.Fragment>

      <LinkGroup>
        {
          links.edges.map(({ node }) => (
            <a key={node.url} href={node.url} target='_blank' rel='noopener noreferrer'>
              {node.title}
            </a>
          ))
        }
      </LinkGroup>
      
      <Copyright>
        <p key={copyrightUrl}>
          {copyrightText}
          <a href={copyrightUrl} target='_blank' rel='noopener noreferrer'>{copyrightUrlText} </a>
          © {new Date().getFullYear()}
        </p>
      </Copyright>
    </FooterGroup>
  )
}

export default Footer


// query
const getLink = graphql`
  {
    footer: contentfulFooterContent {
      text
      downloadButton
      downloadButtonText
    }    
    links: allContentfulFooterLinks {
      edges {
        node {
          url
          title
        }
      }
    }
    copyright: contentfulFooterCopyright {
      copyrightText
      copyrightUrl
      copyrightUrlText
    }
  }
`

// styles
const FooterGroup = styled.div`
  background: #F2F5F7;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #485391;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`

const DownloadBtn = styled.a`
  background: linear-gradient(102.24deg, #663399 0%, #310692 100%);
  box-shadow: 0px 10px 20px rgba(49, 6, 146, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

const LinkGroup = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  text-align: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`

const Copyright = styled.div`
  color: #485391;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`
