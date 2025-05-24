import React from "react"
import * as styles from "./BlogLayoutFooter.module.css"

function BlogLayoutFooter() {
  return (
    <div className={styles.blogLayoutFooter}>
      <div className={styles.blogLayoutFooterInnerContainer}>
        <div className={styles.blogLayoutFooterLeftSection}></div>
        <div className={styles.blogLayoutFooterRightSection}></div>
      </div>
    </div>
  )
}

export default BlogLayoutFooter
