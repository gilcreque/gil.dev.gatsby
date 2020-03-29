import { Grid } from "@horacioh/gatsby-theme-instagram"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Gil Creque`, `developer`, `Gilberto Creque`]}
      />
      <hr />
      <h1>Instagram</h1>
      <Grid />
    </Layout>
  )
}

export default IndexPage
