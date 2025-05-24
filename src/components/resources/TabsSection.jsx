import React, { useState, useEffect, memo } from "react"
import * as styles from "./TabsSection.module.css"
import BlogList from "./blog/List"
import { navigate } from "gatsby"

const TABS = [
  { label: "Blogs", value: 0, url: "/resources/blogs" },
  { label: "Case Studies", value: 1, url: "/resources/case-studies" },
  { label: "Solution Briefs", value: 2, url: "/resources/solution-briefs" },
  { label: "Guides", value: 3, url: "/resources/guides" },
  { label: "Reports", value: 4, url: "/resources/reports" },
  { label: "Videos", value: 5, url: "/resources/videos" },
]

const SIDE_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Announcements", value: "announcements" },
  { label: "Aviz Generic Solution", value: "aviz-generic-solution" },
  {
    label: "Fabric Test Automation Suite",
    value: "fabric-test-automation-suite",
  },
  { label: "Network Observability", value: "network-observability" },
  { label: "Open Networking Enterprise Suite", value: "ones" },
  { label: "Open Packet Broker", value: "open-packet-broker" },
  { label: "SONiC", value: "sonic" },
]

// Custom hook for caching data
const useCache = (key, fetchData, ttl = 5 * 60 * 1000) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
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

function TabsSection({ resourcename }) {
  const [activeTab, setActiveTab] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    if (resourcename === "blogs") {
      setActiveTab(0)
    }
  }, [resourcename])

  return (
    <section className={styles.tabsSection}>
      <nav className={styles.tabsContainer} aria-label="Resource Tabs">
        {TABS.map(tab => (
          <button
            key={tab.value}
            className={activeTab === tab.value ? styles.activeTab : styles.tab}
            onClick={() => {
              setActiveTab(tab.value)
              navigate(tab.url)
            }}
            aria-current={activeTab === tab.value ? "page" : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidePanel} aria-label="Categories">
          {SIDE_CATEGORIES.map(cat => (
            <button
              key={cat.value}
              className={
                activeCategory === cat.value
                  ? styles.activeCategory
                  : styles.categoryButton
              }
              onClick={() => setActiveCategory(cat.value)}
              aria-current={activeCategory === cat.value ? "true" : undefined}
            >
              {cat.label}
            </button>
          ))}
        </aside>
        <div className={styles.cardsList}>
          {activeTab === 0 && <BlogList />}
        </div>
      </div>
    </section>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(TabsSection)
