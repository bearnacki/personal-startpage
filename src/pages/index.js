import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/MenuFeatures/Welcome"
import TodoList from "../components/MenuFeatures/TodoList"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <TodoList />
      <Welcome />
    </Layout>
  </>
)

export default IndexPage
