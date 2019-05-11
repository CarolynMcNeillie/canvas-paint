/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `Paint your heart out`,
    description: `How noostalgic <3`,
  },
}

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `VT323`,
            subsets: [`latin`],
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canvas Paint`,
        icon: `src/images/icon.png`,
        short_name: `Paint`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-remove-serviceworker`
  ]
}
