import React from "react"
import * as styles from "./BlogLayoutLeftSection.module.css"

function BlogLayoutLeftSection({ post }) {
  return (
    <div className={styles.blogLayoutLeftSection}>
      <div className={styles.blogLayoutLeftSectionImageContainer}>
        <img
          src={post.image}
          alt={post.title}
          className={styles.blogLayoutLeftSectionImage}
        />
      </div>
      <div
        className={styles.blogLayoutLeftSectionContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default BlogLayoutLeftSection
