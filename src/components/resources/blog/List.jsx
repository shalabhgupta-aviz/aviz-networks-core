import React from "react"
import axios from "axios"
import * as styles from "./List.module.css"
import Card from "./Card"

// Custom hook for caching data
const useCache = (key, fetchData, ttl = 5 * 60 * 1000) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchAndCache = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(key)
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < ttl) {
            setData(cachedData)
            setLoading(false)
            return
          }
        }

        // If no cache or expired, fetch new data
        const newData = await fetchData()

        // Cache the new data
        localStorage.setItem(
          key,
          JSON.stringify({
            data: newData,
            timestamp: Date.now(),
          })
        )

        setData(newData)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAndCache()
  }, [key, fetchData, ttl])

  return { data, loading, error }
}

function List() {
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://staging.aviznetworks.com/wp-json/wp/v2/posts"
    )
    return response.data.map(post => ({
      title: post.title.rendered,
      description: post.excerpt.rendered,
      date: post.date,
      image: post.yoast_head_json.og_image[0].url,
      slug: post.slug,
    }))
  }

  const {
    data: posts,
    loading,
    error,
  } = useCache(
    "blog-posts",
    fetchPosts,
    5 * 60 * 1000 // Cache for 5 minutes
  )

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error.message}</div>
  }

  return (
    <div className={styles.list}>
      {posts?.map(post => (
        <Card key={post.title} {...post} />
      ))}
    </div>
  )
}

export default React.memo(List)
