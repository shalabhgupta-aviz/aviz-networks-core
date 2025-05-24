import React from "react"
import * as styles from "./Card.module.css"
import { Link } from "gatsby"

function Card(post) {
  const { title, description, date, image, slug } = post
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardDate}>
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className={styles.cardTitle}>
          <Link to={`/resources/blogs/${slug}`}>{title}</Link>
        </div>
        <div
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className={styles.cardReadMore}>
          <Link to={`/resources/blogs/${slug}`}>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
