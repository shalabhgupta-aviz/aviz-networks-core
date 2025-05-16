"use client"
import React from "react"
import * as styles from "./PricingCalculator.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SpeedSelector from "./SpeedSelector"
import PricingComparison from "./PricingComparison"
import SavingsCard from "./SavingsCard"
import TopRectangleVector from "../common/TopRectangleVector"
import BottomRectangleVector from "../common/BottomRectangleVector"
function PricingCalculator({ title }) {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.calculatorSection}>
          <div className={styles.titleContainer}>
            <StaticImage
              src={"../../images/dot-circle-bg.png"}
              alt="dot-circle-bg"
              className={styles.dotCircle}
            />
            <h1 className={styles.mainTitle}>
              {title}
              <div className={styles.purpleBar} />
            </h1>
          </div>
          <TopRectangleVector />
          <h2 className={styles.subtitle}>Select Speed to Get Started</h2>
          <SpeedSelector />
          <div className={styles.yearSelector}>
            <button className={styles.yearButton}>3Years</button>
            <button className={styles.yearButtonOutlined}>5Years</button>
          </div>
          <div className={styles.pricingSection}>
            <PricingComparison />
            <SavingsCard />
          </div>
          <BottomRectangleVector />
        </section>
      </main>
    </>
  )
}

export default PricingCalculator
