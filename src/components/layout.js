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
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
`

const MainContentWrapper = styled.div`
  margin: 80px auto 0 auto;
  width: 800px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
      <MainContentWrapper>{children}</MainContentWrapper>
    </StyledWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
