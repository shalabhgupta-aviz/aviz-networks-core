import React from "react"
import * as styles from "../Footer.module.css"
import FooterColumn from "./FooterColumn"
import { StaticImage } from "gatsby-plugin-image"

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
    { url: "/resources/blogs", text: "Blog" },
    { url: "/", text: "ONES Validated Design (OVD)" },
    { url: "/", text: "AVIZ Certified SONiC Professional (ACSI)" },
    { url: "/", text: "Support" },
  ]

  return (
    <section className={styles.topSection}>
      <div className={styles.companyInfo}>
        <StaticImage
          src={"../../images/aviz_logo.svg"}
          alt="AVIZ Networks"
          className={styles.logo}
          width={234}
          height={57}
        />
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
          <StaticImage
            loading="lazy"
            src={"../../images/instagram-icon.svg"}
            alt="Instagram"
            width={24}
            height={24}
          />
        </span>
        <span className={styles.socialIcon}>
          <StaticImage
            loading="lazy"
            src={"../../images/twitter-icon.svg"}
            alt="Twitter"
            width={24}
            height={24}
          />
        </span>
      </div>
    </section>
  )
}

export default FooterTop
