"use client"
import React from "react"
import * as styles from "./PricingCalculator.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SpeedSelector from "./SpeedSelector"
import PricingComparison from "./PricingComparison"
import SavingsCard from "./SavingsCard"

function PricingCalculator() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <section className={styles.calculatorSection}>
          <div className={styles.titleContainer}>
            <StaticImage
              src={"../../images/Vector1.png"}
              alt="Vector 1"
              className={styles.vector1}
            />
            {/* <StaticImage
              src={"../../images/Vector2.png"}
              alt="Vector 2"
              className={styles.vector2}
              /> */}
            <StaticImage
              src={"../../images/Vector3.png"}
              alt="Vector 3"
              className={styles.vector3}
            />
            <h1 className={styles.mainTitle}>
              Calculate Your Savings with SONiC &amp; ONES
              <div className={styles.purpleBar} />
            </h1>
          </div>
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
        </section>
      </main>
    </>
  )
}

export default PricingCalculator
