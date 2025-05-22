import React from "react"
import * as styles from "./BlogList.module.css"
import BlogCard from "./BlogCard"

function BlogList() {
  return (
    <div className={styles.blogList}>
      <BlogCard />
    </div>
  )
}

export default BlogList
