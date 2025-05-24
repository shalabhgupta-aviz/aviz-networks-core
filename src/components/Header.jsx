import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import logo from "../images/aviz_logo.svg"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <img
          loading="lazy"
          width={234}
          height={57}
          srcSet={logo}
          alt="Aviz Logo"
        />
      </Link>
    </div>
    <nav className={styles.navigation}>
      <Link to="/" className={styles.navLink}>
        About us
      </Link>
      <Link to="/" className={styles.navLink}>
        Product
      </Link>
      <Link to="/" className={styles.navLink}>
        Solutions
      </Link>
      <Link to="/" className={styles.navLink}>
        Resources
      </Link>
      <Link to="/" className={styles.navLink}>
        Partners
      </Link>
      <Link to="/" className={styles.navLink}>
        For You
      </Link>
    </nav>
    <div className={styles.actions}>
      <button className={styles.menuButton} aria-label="Toggle menu">
        <i className={styles.menuIcon}></i>
      </button>
      <Link to="/" className={styles.contactButton}>
        Contact Us
      </Link>
    </div>
  </header>
)

export default Header
