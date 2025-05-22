import React from "react"
import * as styles from "../Footer.module.css"

function ContactItem({ icon, text }) {
  return (
    <div className={styles.contactItem}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <p className={styles.contactText}>{text}</p>
    </div>
  )
}

export default ContactItem
