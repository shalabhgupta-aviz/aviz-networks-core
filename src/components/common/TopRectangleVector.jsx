import React from "react"
import * as styles from "./TopRectangleVector.module.css"
import { StaticImage } from "gatsby-plugin-image"

function TopRectangleVector() {
  return (
    <div className={styles.topVectorContainer}>
      <StaticImage
        src={"../../images/Vector1.png"}
        alt="Vector 1"
        className={styles.vector1}
      />
      <StaticImage
        src={"../../images/Vector3.png"}
        alt="Vector 3"
        className={styles.vector3}
      />
    </div>
  )
}

export default TopRectangleVector
