import React from "react"
import * as styles from "./Card.module.css"

function Card({ title, description, date, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardDate}>{date}</div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardReadMore}>Read More</div>
      </div>
    </div>
  )
}

export default Card
