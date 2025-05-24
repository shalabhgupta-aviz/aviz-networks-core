import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import * as styles from "./BlogDetailLayout.module.css"

function BlogDetailLayout({ resourcedetail, resourcename }) {
  const slug = resourcedetail
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://staging.aviznetworks.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        )
        if (res.data.length === 0) {
          setError("Post not found")
          return
        }

        const data = res.data[0]
        console.log(data)
        setPost({
          title: data.title.rendered,
          content: data.content.rendered,
          date: data.date,
          image:
            data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://aviznetworks.com/wp-content/uploads/2025/05/ip-ones-3-BLOG-Banner.png",
        })
      } catch (err) {
        setError("Failed to fetch post")
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [resourcename])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div className={styles.container}></div>
}

export default BlogDetailLayout
