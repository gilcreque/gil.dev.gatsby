import React from "react"

const WordpressPosts = props => {
  const posts = props.edges

  const entityToChar = str => {
    const textarea = document.createElement("textarea")
    textarea.innerHTML = str
    return textarea.value
  }

  return (
    <>
      {posts.map(({ node }, index) => (
        <article key={node.id}>
          <h1>{entityToChar(node.title)}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </article>
      ))}
    </>
  )
}

export default WordpressPosts
