module.exports = {
  siteMetadata: {
    title: `Gil Creque`,
    description: `My new home base`,
    author: `@gilcreque`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gilcreque`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gilcreque`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gil Creque - Developer`,
        short_name: `gilcreque`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: true,
        basePath: `/notes`,
      },
    },
    {
      resolve: "@horacioh/gatsby-theme-instagram",
      options: {
        type: `account`,
        username: "gilcreque",
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
  ],
}
