import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </>
)

export default IndexPage
