import React from "react"
import Layout from "../../../../components/layout"
import Seo from "../../../../components/seo"
import BlogDetailLayout from "../../../../components/resources/details-layout/BlogDetailLayout"
import { useParams } from "react-router-dom"

function ResourceDetail() {
  const { resourcename, resourcedetail } = useParams()
  return (
    <Layout>
      <Seo title="Resource Detail" />
      <BlogDetailLayout />
    </Layout>
  )
}

export default ResourceDetail
