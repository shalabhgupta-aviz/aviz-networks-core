/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // Dynamic redirects
  createRedirect({
    fromPath: `/blog/*`,
    toPath: `/articles/:splat`,
    isPermanent: true,
  })

  // You can add more dynamic redirects here
  createRedirect({
    fromPath: `/old-blog/*`,
    toPath: `/blog/:splat`,
    isPermanent: true,
  })
}
