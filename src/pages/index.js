import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/MenuFeatures/Welcome"
import TodoList from "../components/MenuFeatures/TodoList/TodoList"
import Bored from "../components/MenuFeatures/Bored"
import styled from "styled-components"

const LeftPanel = styled.div`
	margin: 80px auto 0 auto;
  max-width: 500px;
  height: 100%;
  background: inherit;

  @media (max-width: 1400px) {
    width: 100%;
    max-width: 100%;
    margin: 80px 0 0 0;
  }
`

const MainPanel = styled.div`
	margin: 80px auto 0 auto;
	max-width: 800px;
	height: 100%;
  background: inherit;

  @media (max-width: 1400px) {
    width: 100%;
    max-width: 100%;
    margin: 80px 0 0 0;
  }
`

const RightPanel = styled.div`
	margin: 80px auto 0 auto;
  max-width: 500px;
  height: 100%;
  background: inherit;

  @media (max-width: 1900px) {
    width: 100%;
    max-width: 100%;
    margin: 80px 0 0 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LeftPanel>
      <TodoList />
    </LeftPanel>
    <MainPanel><Welcome /></MainPanel>
    <RightPanel><Bored /></RightPanel>
  </Layout>
)

export default IndexPage
