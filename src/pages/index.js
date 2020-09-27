import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/MenuFeatures/Welcome"
import TodoList from "../components/MenuFeatures/TodoList/TodoList"
import Bored from "../components/MenuFeatures/Bored"
import styled from "styled-components"

const LeftPanel = styled.div`
  margin: 80px 5px 0 5px;
  width: 500px;
  height: 100%;
  background: inherit;
`

const MainPanel = styled.div`
	margin: 80px auto 0 auto;
	width: 800px;
	height: 100%;
  background: inherit;
`

const RightPanel = styled.div`
  margin: 80px 5px 0 5px;
  width: 500px;
  height: 100%;
  background: inherit;
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
