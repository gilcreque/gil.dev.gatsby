import { graphql } from "gatsby"
import React from "react"
import Image from "../components/image"
import InstagramPosts from "../components/instagram-posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WordpressPosts from "../components/wordpress-posts"

export const pageQuery = graphql`
  {
    allInstaNode(sort: { fields: timestamp, order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
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
  const grams = data.allInstaNode

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Gil Creque`, `developer`, `Gilberto Creque`]}
      />
      <WordpressPosts {...posts} />
      <InstagramPosts {...grams} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
