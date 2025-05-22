import React from "react"
import * as styles from "./HeroSection.module.css"
import avizLogo from "../../images/aviz_logo.svg"
import dotCircleBg from "../../images/dot-circle-bg.png"

function HeroSection() {
  return (
    <section
      className={styles.heroSection}
      aria-label="Resource Library Hero Banner"
    >
      {/* Decorative background image */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Resource Library</h1>
        <p className={styles.heroDescription}>
          Discover how Aviz Networks is redefining networking with AI-driven
          innovations, Community SONiC, and unparalleled network observability.
          Delivering Open, Quality-Assured, and Future-Proof solutions for your
          enterprise
        </p>
      </div>
    </section>
  )
}

export default HeroSection
