import React, { useState } from "react"
import * as styles from "./TabsSection.module.css"

const TABS = [
  { label: "Blogs", value: "blogs" },
  { label: "Case Studies", value: "case-studies" },
  { label: "Solution Briefs", value: "solution-briefs" },
  { label: "Guides", value: "guides" },
  { label: "Reports", value: "reports" },
  { label: "Videos", value: "videos" },
]

const SIDE_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Network Observability", value: "network-observability" },
  { label: "Open Networking Enterprise Suite", value: "ones" },
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

function TabsSection() {
  const [activeTab, setActiveTab] = useState("case-studies")
  const [activeCategory, setActiveCategory] = useState("all")

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
            onClick={() => setActiveTab(tab.value)}
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
          {filteredCards.length === 0 ? (
            <p className={styles.noResults}>No results found.</p>
          ) : (
            <ul className={styles.cardsGrid}>
              {filteredCards.map(card => (
                <li key={card.id} className={styles.card}>
                  <img
                    src={card.image}
                    alt=""
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.cardContent}>
                    <time className={styles.cardDate}>{card.date}</time>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.description}</p>
                    <a href={card.link} className={styles.cardLink}>
                      Read Case Study
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default TabsSection
