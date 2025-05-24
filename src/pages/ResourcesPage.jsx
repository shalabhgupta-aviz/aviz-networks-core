import React, { lazy, Suspense } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/resources/HeroSection"
import SearchResourceSection from "../components/resources/SearchResourceSection"

const TabsSection = lazy(() => import("../components/resources/TabsSection"))

const ResourcesPage = ({ params }) => {
  const { resourcename } = params

  return (
    <Layout>
      <Seo title="Resources" />
      <HeroSection />
      <SearchResourceSection />
      <Suspense fallback={<div className="loading">Loading resources...</div>}>
        <TabsSection resourcename={resourcename} />
      </Suspense>
    </Layout>
  )
}

export default ResourcesPage
