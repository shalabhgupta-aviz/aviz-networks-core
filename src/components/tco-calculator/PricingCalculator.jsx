"use client"
import React from "react"
import * as styles from "./PricingCalculator.module.css"
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
          <h1 className={styles.mainTitle}>
            Calculate Your Savings with SONiC &amp; ONES
          </h1>
          <div className={styles.purpleBar} />
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
