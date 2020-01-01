import React from "react"

const WordpressPosts = props => {
  const posts = props.edges

  return (
    <>
      <h2>Blog Posts</h2>
      {posts.map(({ node }, index) => (
        <article key={node.id}>
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </article>
      ))}
    </>
  )
}

export default WordpressPosts
