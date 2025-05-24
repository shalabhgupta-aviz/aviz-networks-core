import React from "react"
import * as styles from "./BlogLayoutRightSection.module.css"

const author = {
  name: "Keerthi Chukka",
  role: "Blog Author",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image if available
}

const recentPosts = [
  {
    title: "ONES 3.1: Advancing SONIC Support with Improved Troubleshooting",
    date: "May 14, 2025",
  },
  {
    title:
      "Enhancing ONES Observability: Performance Monitoring for GPU-Accelerated Compute Environments",
    date: "May 9, 2025",
  },
  {
    title: "The KPI Advantage: Unlocking Network Observability Through Data",
    date: "May 9, 2025",
  },
]

const quickLinks = [
  { label: "Case Studies", href: "#" },
  { label: "Events", href: "#" },
  { label: "About us", href: "#" },
]

function BlogLayoutRightSection() {
  return (
    <aside className={styles.blogLayoutRightSection} aria-label="Blog sidebar">
      <section className={styles.authorSection}>
        <img
          src={author.avatar}
          alt={`Author: ${author.name}`}
          className={styles.avatar}
        />
        <div>
          <div className={styles.authorName}>{author.name}</div>
          <div className={styles.authorRole}>{author.role}</div>
        </div>
      </section>
      <section className={styles.recentPostsSection}>
        <h2 className={styles.sectionTitle}>Recent Post</h2>
        <ul className={styles.recentPostsList}>
          {recentPosts.map((post, idx) => (
            <li key={idx} className={styles.recentPostItem}>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.postDate}>{post.date}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.quickLinksSection}>
        <h2 className={styles.sectionTitle}>Quick Links</h2>
        <ul className={styles.quickLinksList}>
          {quickLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className={styles.quickLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default BlogLayoutRightSection
