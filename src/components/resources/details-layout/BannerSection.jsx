import React from "react"
import * as styles from "./BannerSection.module.css"
import avizLogo from "../../../images/aviz_logo.svg"
import twitterIcon from "../../../images/twitter-icon.svg"
import instagramIcon from "../../../images/instagram-icon.svg"

export default function BannerSection() {
  return (
    <section className={styles.bannerSection} aria-label="Blog Banner">
      <div className={styles.bannerOverlay} />
      <div className={styles.bannerContent}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <ol className={styles.breadcrumbList}>
            <li>
              <a href="/resources/blogs">Blog</a>
            </li>
            <li aria-current="page">
              Real-Time IP Awareness for SONiC Data Centers Using ONES
            </li>
          </ol>
        </nav>
        <h1 className={styles.bannerTitle}>
          Real-Time IP Awareness for SONiC Data Centers Using ONES
        </h1>
        <div className={styles.socialIcons} aria-label="Share on social media">
          <a
            href="#"
            aria-label="LinkedIn"
            className={styles.iconCircle}
            tabIndex={0}
          >
            {/* Placeholder for LinkedIn */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#fff" />
              <path
                d="M7.5 9.5V16.5"
                stroke="#2D2D2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7.5" cy="7.5" r="1" fill="#2D2D2D" />
              <path
                d="M10.5 12.5V16.5"
                stroke="#2D2D2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 13.5C10.5 12.3954 11.3954 11.5 12.5 11.5C13.6046 11.5 14.5 12.3954 14.5 13.5V16.5"
                stroke="#2D2D2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className={styles.iconCircle}
            tabIndex={0}
          >
            <img src={twitterIcon} alt="Twitter" width="28" height="28" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className={styles.iconCircle}
            tabIndex={0}
          >
            {/* Placeholder for Facebook */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#fff" />
              <path
                d="M15 8.5H13.5C12.9477 8.5 12.5 8.94772 12.5 9.5V11.5H15V13.5H12.5V19.5H10.5V13.5H9V11.5H10.5V9.5C10.5 8.11929 11.6193 7 13 7H15V8.5Z"
                fill="#2D2D2D"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
