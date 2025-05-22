import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"
import TitleSection from "../components/homepage/TitleSection"
const IndexPage = () => (
  <Layout>
    <TitleSection />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
