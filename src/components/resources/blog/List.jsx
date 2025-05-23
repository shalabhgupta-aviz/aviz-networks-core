import React from "react"
import * as styles from "./List.module.css"
import Card from "./Card"

function List() {
  const dummyData = [
    {
      title: "Blog 1",
      description: "Description 1",
      date: "2025-05-23",
      image:
        "https://aviznetworks.com/wp-content/uploads/2025/05/ip-ones-3-BLOG-Banner.png",
    },
    {
      title: "Blog 2",
      description: "Description 2",
      date: "2025-05-23",
      image:
        "https://aviznetworks.com/wp-content/uploads/2025/05/ip-ones-3-BLOG-Banner.png",
    },
    {
      title: "Blog 3",
      description: "Description 3",
      date: "2025-05-23",
      image:
        "https://aviznetworks.com/wp-content/uploads/2025/05/ip-ones-3-BLOG-Banner.png",
    },
  ]

  return (
    <div className={styles.list}>
      {dummyData.map(item => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  )
}

export default List
