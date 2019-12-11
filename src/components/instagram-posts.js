import React from "react"
import "./instagram-posts.css"

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

      <section id="instagramGrid">
        {posts.map(({ node }) => (
          <figure key={node.id} class="instagramPhoto">
            <a href={"https://www.instagram.com/p/" + node.id}>
              <img
                src={node.localFile.childImageSharp.fluid.src}
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
            </a>
            <figcaption>
              <p>
                {node.likes > 0 && (
                  <span class="likes">
                    <span role="img" aria-label="Instagram Likes">
                      💜
                    </span>{" "}
                    {node.likes}
                  </span>
                )}

                {node.comments > 0 && (
                  <span class="comments">
                    <span role="img" aria-label="Instagram Comments">
                      📣
                    </span>{" "}
                    {node.comments}
                  </span>
                )}
              </p>
              <p>
                {entityToChar(node.caption) ||
                  new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(node.timestamp)}
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}

export default InstagramPosts
