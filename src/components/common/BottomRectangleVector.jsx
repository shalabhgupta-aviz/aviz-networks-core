import React from "react"
import * as styles from "./BottomRectangleVector.module.css"
import { StaticImage } from "gatsby-plugin-image"

function BottomRectangleVector() {
  return (
    <div className={styles.bottomVectorContainer}>
      <StaticImage
        src={"../../images/Vector2.png"}
        alt="Vector 2"
        className={styles.vector2}
      />
      <StaticImage
        src={"../../images/Vector4.png"}
        alt="Vector 4"
        className={styles.vector4}
      />
    </div>
  )
}

export default BottomRectangleVector
