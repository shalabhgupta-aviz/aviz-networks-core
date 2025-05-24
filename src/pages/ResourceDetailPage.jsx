import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogDetailLayout from "../components/resources/details-layout/BlogDetailLayout"

function ResourceDetailPage({ params }) {
  const { resourcename, resourcedetail } = params
  const [layoutIndex, setLayoutIndex] = useState(null)

  useEffect(() => {
    if (resourcename === "blogs") {
      setLayoutIndex(0)
    } else if (resourcename === "case-studies") {
      setLayoutIndex(1)
    } else if (resourcename === "solution-briefs") {
      setLayoutIndex(2)
    } else if (resourcename === "guides") {
      setLayoutIndex(3)
    } else if (resourcename === "reports") {
      setLayoutIndex(4)
    } else if (resourcename === "videos") {
      setLayoutIndex(5)
    }
  }, [resourcename])

  return (
    <Layout>
      <Seo title="Resource Detail" />
      {layoutIndex === 0 && (
        <BlogDetailLayout
          resourcedetail={resourcedetail}
          resourcename={resourcename}
        />
      )}
    </Layout>
  )
}

export default ResourceDetailPage
