import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import logo from "../images/aviz_logo.svg"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="Aviz Logo" />
    </div>
    <nav className={styles.navigation}>
      <a href="#" className={styles.navLink}>
        About us
      </a>
      <a href="#" className={styles.navLink}>
        Product
      </a>
      <a href="#" className={styles.navLink}>
        Solutions
      </a>
      <a href="#" className={styles.navLink}>
        Resources
      </a>
      <a href="#" className={styles.navLink}>
        Partners
      </a>
      <a href="#" className={styles.navLink}>
        For You
      </a>
    </nav>
    <div className={styles.actions}>
      <button className={styles.menuButton}>
        <i className={styles.menuIcon}></i>
      </button>
      <button className={styles.contactButton}>Contact Us</button>
    </div>
  </header>
)

export default Header
