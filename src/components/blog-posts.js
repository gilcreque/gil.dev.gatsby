import React from "react"

const BlogPosts = props => {
  const posts = props.edges

  const entityToChar = str => {
    const textarea = document.createElement("textarea")
    textarea.innerHTML = str
    return textarea.value
  }

  return (
    <>
      <h2>Blog Posts</h2>
      {posts.map(({ node }, index) => (
        <article key={node.id}>
          <h3>{entityToChar(node.title)}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </article>
      ))}
    </>
  )
}

export default BlogPosts
