exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Page to handle /resources/:resourcename (like a category page)
  createPage({
    path: "/resources/all", // static fallback path
    matchPath: "/resources/:resourcename",
    component: require.resolve("./src/pages/ResourcesPage.jsx"),
  })

  // Page to handle /resources/:resourcename/:resourcedetail (like blog detail)
  createPage({
    path: "/resources/all/details", // static fallback path
    matchPath: "/resources/:resourcename/:resourcedetail",
    component: require.resolve("./src/pages/ResourceDetailPage.jsx"),
  })
}
