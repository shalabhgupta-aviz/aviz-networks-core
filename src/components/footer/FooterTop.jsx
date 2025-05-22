import React from "react"
import * as styles from "../Footer.module.css"
import FooterColumn from "./FooterColumn"
import logo from "../../images/aviz_logo.svg"
import instagramIcon from "../../images/instagram-icon.svg"
import twitterIcon from "../../images/twitter-icon.svg"

function FooterTop() {
  const quickLinks = [
    { url: "/", text: "Open Source Community" },
    { url: "/", text: "SONiC Foundation" },
    { url: "/", text: "Newsroom" },
    { url: "/", text: "Partners" },
    { url: "/", text: "Training and Certification" },
    {
      url: "/calculate-your-savings-sonic-ones-network-observability-aviz-networks",
      text: "TCO Calculator",
    },
    { url: "/", text: "Contact us" },
  ]

  const companyLinks = [
    { url: "/", text: "About Us" },
    { url: "/", text: "Our Team" },
    { url: "/", text: "Blog" },
    { url: "/", text: "ONES Validated Design (OVD)" },
    { url: "/", text: "AVIZ Certified SONiC Professional (ACSI)" },
    { url: "/", text: "Support" },
  ]

  return (
    <section className={styles.topSection}>
      <div className={styles.companyInfo}>
        <img src={logo} alt="AVIZ Networks" className={styles.logo} />
        <h2 className={styles.tagline}>Open source network solutions</h2>
        <p className={styles.description}>
          Reimagine your networks with open-source SONiC and AI agents—gain
          control, flexibility, and savings
        </p>
      </div>

      <FooterColumn title="Quick Links" links={quickLinks} />
      <FooterColumn title="Company" links={companyLinks} />
      <div className={styles.socialIcons}>
        <span className={styles.socialIcon}>
          <img src={instagramIcon} alt="Instagram" />
        </span>
        <span className={styles.socialIcon}>
          <img src={twitterIcon} alt="Twitter" />
        </span>
      </div>
    </section>
  )
}

export default FooterTop
