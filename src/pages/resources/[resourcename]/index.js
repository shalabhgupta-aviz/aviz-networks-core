import React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import HeroSection from "../../../components/resources/HeroSection"
import TabsSection from "../../../components/resources/TabsSection"
import SearchResourceSection from "../../../components/resources/SearchResourceSection"

const ResourcesPage = ({ params }) => {
  const { resourcename } = params
  console.log(resourcename)
  return (
    <Layout>
      <Seo title="Resources" />
      <HeroSection />
      <SearchResourceSection />
      <TabsSection resourcename={resourcename} />
    </Layout>
  )
}

export default ResourcesPage
