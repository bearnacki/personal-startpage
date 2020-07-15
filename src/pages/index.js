import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/MenuFeatures/Welcome"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Welcome />
    </Layout>
  </>
)

export default IndexPage
