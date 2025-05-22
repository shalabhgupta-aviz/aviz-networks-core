"use client"
import React from "react"
import * as styles from "./Footer.module.css"
import FooterTop from "./footer/FooterTop"
import FooterBottom from "./footer/FooterBottom"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}

export default Footer
