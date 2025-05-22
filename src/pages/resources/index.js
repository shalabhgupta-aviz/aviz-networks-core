import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroSection from "../../components/blog/HeroSection"
import TabsSection from "../../components/blog/TabsSection"
import SearchResourceSection from "../../components/blog/SearchResourceSection"

const ResourcesPage = () => (
  <Layout>
    <Seo title="Resources" />
    <HeroSection />
    <SearchResourceSection />
    <TabsSection />
  </Layout>
)

export default ResourcesPage
