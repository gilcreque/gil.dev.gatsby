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
          <h3>{entityToChar(node.caption)}</h3>
        </article>
      ))}
    </>
  )
}

export default InstagramPosts
