import React from "react"
import * as styles from "../Footer.module.css"
import { Link } from "gatsby"

function FooterColumn({ title, links }) {
  return (
    <nav>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linksList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterColumn
