import React from "react"
import * as styles from "./List.module.css"
import Card from "./Card"

function List() {
  return (
    <div className={styles.list}>
      <Card />
    </div>
  )
}

export default List
