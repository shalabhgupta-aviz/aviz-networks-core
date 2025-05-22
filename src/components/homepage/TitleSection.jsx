"use client"
import React from "react"
import * as styles from "./TitleSection.module.css"
// import IconSet from "./IconSet"

function TitleSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          <span>Break free from Old</span>
          <br />
          <span>Networking in the</span>
          <br />
          <span className={styles.headingBold}>New Era of AI</span>
        </h1>
        <h2 className={styles.subheading}>OPEN Source Networking Solutions</h2>
      </div>

      <div className={styles.rightContent}>
        {/* <IconSet /> */}
        <p className={styles.description}>
          <span>Reimagine your networks with open-source</span>
          <br />
          <span>SONiC and AI agents—gain control,</span>
          <br />
          <span>flexibility, and savings</span>
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Talk with us</button>
          <button className={styles.secondaryButton}>Community</button>
        </div>
      </div>
    </section>
  )
}

export default TitleSection
