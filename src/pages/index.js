import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WordpressPosts from "../components/wordpress-posts"

export const pageQuery = graphql`
  {
    allWordpressPost(limit: 10) {
      edges {
        node {
          id
          slug
          title
          content
          date
          modified
          featured_media {
            id
            source_url
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Gil Creque`, `developer`, `Gilberto Creque`]}
      />
      <WordpressPosts {...posts} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
