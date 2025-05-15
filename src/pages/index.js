import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <main className={styles.main}>
      <h1>Welcome to My Site</h1>
      <p>This is a basic Gatsby starter template.</p>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </main>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
