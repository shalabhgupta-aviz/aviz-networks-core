import React, { useState, useEffect } from "react"
import axios from "axios"
import * as styles from "./List.module.css"
import Card from "./Card"

function List() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://staging.aviznetworks.com/wp-json/wp/v2/posts"
        )
        const formattedPosts = response.data.map(post => ({
          title: post.title.rendered,
          description: post.excerpt.rendered,
          date: post.date,
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://aviznetworks.com/wp-content/uploads/2025/05/ip-ones-3-BLOG-Banner.png",
          slug: post.slug,
        }))
        setPosts(formattedPosts)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch blog posts")
        setLoading(false)
        console.error("Error fetching posts:", err)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.list}>
      {posts.map(post => (
        <Card key={post.title} {...post} />
      ))}
    </div>
  )
}

export default List
