/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aviz Networks`,
    description: `Next-gen networking solutions`,
    author: `@AvizNetworks`,
    siteUrl: `https://aviznetworks.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PAYLOAD",
        fieldName: "payload",
        url: "https://your-payload-cms-endpoint/graphql",
        // Replace "https://your-payload-cms-endpoint/graphql" with your Payload CMS GraphQL endpoint.
      },
    },
  ],
}
