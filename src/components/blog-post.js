import React from "react"

const WordpressPosts = props => {
  const posts = props.edges


  return (
    <>
      {posts.map(({ node }, index) => (
        <article key={node.id}>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </article>
      ))}
    </>
  )
}

export default WordpressPosts
