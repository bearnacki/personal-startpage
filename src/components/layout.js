import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation/Navigation"
import backgroundImage from "../images/wallhaven-59564.jpg"

const StyledWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      <Navigation />
    </StyledWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
