import React from "react"

const InstagramPosts = props => {
  const posts = props.edges

  const entityToChar = str => {
    const textarea = document.createElement("textarea")
    textarea.innerHTML = str
    return textarea.value
  }

  return (
    <>
      <h2>Instagram Posts</h2>
      {posts.map(({ node }, index) => (
        <article key={node.id}>
          <h3>
            {entityToChar(node.caption) ||
              new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(node.timestamp)}
          </h3>
          <img
            fluid={node.localFile.childImageSharp.fluid}
            alt={
              entityToChar(node.caption) ||
              new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(node.timestamp)
            }
          />
        </article>
      ))}
    </>
  )
}

export default InstagramPosts
