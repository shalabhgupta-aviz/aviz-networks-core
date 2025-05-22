import React from "react"
import Layout from "../components/layout"
import TCOCalculatorHome from "../components/tco-calculator/TCOCalculatorHome"
import Seo from "../components/seo"
function TCOHome() {
  return (
    <Layout>
      <Seo title="Calculate Your Savings" />
      <TCOCalculatorHome />
    </Layout>
  )
}

export default TCOHome
