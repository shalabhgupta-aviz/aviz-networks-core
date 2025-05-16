import React from "react"
import * as styles from "./TCOCalculatorHome.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function TCOCalculatorHome() {
  return (
    <div className={styles.container}>
      <StaticImage
        src={"../../images/dot-circle-bg.png"}
        alt="dot-circle-bg"
        className={styles.dotCircle}
      />
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>
          TCO Calculator
          <div className={styles.purpleBar} />
        </h1>
        <div className={styles.digitalToolImageContainer}>
          <StaticImage
            src={"../../images/digital-tool-image.png"}
            alt="digital-tool-image"
            className={styles.digitalToolImage}
          />
        </div>
      </div>
      <div className={styles.calculatorBodyContainer}>
        {/* Box 1 */}
        <section className={styles.calculatorBox}>
          <img
            src="https://aviznetworks.com/wp-content/uploads/2025/05/sonic-1-300x134.png"
            alt="SONiC Logo"
            className={styles.boxLogo}
          />
          <h2 className={styles.boxTitle}>
            Calculate Your Savings with <br /> SONiC &amp; ONES
          </h2>
          <p className={styles.boxDescription}>
            Discover your potential savings with Aviz SONiC &amp; ONES. Estimate
            hardware, software, and operational cost reductions by switching to
            open networking.
          </p>
          <Link
            to="/tco-calculators/calculate-your-sonic-savings"
            className={styles.calculateButton}
            tabIndex={0}
            aria-label="Calculate your savings with SONiC and ONES"
          >
            Calculate Now
          </Link>
        </section>

        {/* Box 2 */}
        <section className={styles.calculatorBox}>
          <img
            src="https://aviznetworks.com/wp-content/uploads/2025/05/server-img-300x225.png"
            alt="Network Observability Logo"
            className={styles.boxLogo}
          />
          <h2 className={styles.boxTitle}>
            Calculate Your Network <br /> Observability Savings
          </h2>
          <p className={styles.boxDescription}>
            Discover your potential savings with Aviz Network Observability.
            Estimate hardware, software, and operational cost reductions by
            switching to our observability solution.
          </p>
          <Link
            to="/tco-calculators/open-packet-broker-avis-service-nodes-tco-calculator"
            className={styles.calculateButton}
            tabIndex={0}
            aria-label="Calculate your network observability savings"
          >
            Calculate Now
          </Link>
        </section>
      </div>
    </div>
  )
}

export default TCOCalculatorHome
