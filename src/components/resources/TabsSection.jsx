import React, { useState, useEffect } from "react"
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

const CARDS = [
  {
    id: 1,
    tab: "case-studies",
    category: "network-observability",
    date: "18th Feb, 2025",
    title:
      "Deep Network Observability Improves 5G Mobile Subscriber User Experience",
    description:
      "Aviz's Deep Network Observability solution enhances 5G performance by providing real-time insights, seamless integration, and cost-effective scaling...",
    image: "https://aviznetworks.com/wp-content/uploads/2025/05/5g-image.jpg",
    link: "#",
  },
  {
    id: 2,
    tab: "case-studies",
    category: "sonic",
    date: "6th December, 2024",
    title: "Aitire's Transition to Community SONiC with Aviz Networks",
    description:
      "How Aitire Achieved Cost-Efficient Networking and Future-Proofed Their Infrastructure. Aitire successfully transitioned to Community SONIC with Aviz...",
    image:
      "https://aviznetworks.com/wp-content/uploads/2025/05/sonic-transition.jpg",
    link: "#",
  },
  // Add more mock cards as needed
]

function TabsSection({ resourcename }) {
  const [activeTab, setActiveTab] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    if (resourcename === "blogs") {
      setActiveTab(0)
    }
  }, [resourcename])

  const filteredCards = CARDS.filter(
    card =>
      card.tab === activeTab &&
      (activeCategory === "all" || card.category === activeCategory)
  )

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

export default TabsSection
