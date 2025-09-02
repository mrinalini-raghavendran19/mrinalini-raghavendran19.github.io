module.exports = {
  siteMetadata: {
    title: `Mrinalini | Portfolio`,
    description: `Personal portfolio site built with Gatsby`,
    author: `@mrinalini`,
    siteUrl: `https://mrinalini-raghavendran19.github.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `mrinalini-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
