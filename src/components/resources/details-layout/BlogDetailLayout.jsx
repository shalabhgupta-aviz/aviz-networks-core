import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import * as styles from "./BlogDetailLayout.module.css"
import BannerSection from "./BannerSection"
import BlogLayoutLeftSection from "./BlogLayoutLeftSection"
import BlogLayoutRightSection from "./BlogLayoutRightSection"
import BlogLayoutFooter from "./BlogLayoutFooter"

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
          image: data.yoast_head_json.og_image[0].url,
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

  return (
    <div className={styles.container}>
      <BannerSection />
      <div className={styles.blogLayout}>
        <div className={styles.blogLayoutInnerContainer}>
          <div className={styles.dateContainer}>May 16, 2025</div>
          <div className={styles.sectionContainer}>
            <BlogLayoutLeftSection post={post} />
            <BlogLayoutRightSection post={post} />
          </div>
          <BlogLayoutFooter />
        </div>
      </div>
    </div>
  )
}

export default BlogDetailLayout
