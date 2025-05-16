import React from "react"
import * as styles from "./SavingsCard.module.css"
import starImg from "../../images/star-icon.svg"
import checkmarkImg from "../../images/checkmark-icon.svg"

function SavingsCard() {
  const savingsData = [
    { label: "Hardware Price", value: "$54,948", icon: "checkmark" },
    { label: "Hardware Support", value: "$3,280", icon: "checkmark" },
    { label: "Software + Controller", value: "$5,250", icon: "checkmark" },
    { label: "Total TCO", value: "$63,478", icon: "checkmark" },
    { label: "Discount", value: "20%", icon: "checkmark" },
    { label: "Net Price", value: "$50,782", icon: "checkmark" },
  ]

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.savesTitleWrapper}>
          <h3 className={styles.savesTitle}>Saves</h3>
          <p className={styles.savesPercentage}>
            <span className={styles.percentageValue}>25</span>
            <span className={styles.percentageSymbol}>%</span>
          </p>
        </div>
        <div className={styles.savesDescription}>
          <img src={starImg} alt="star" className={styles.starIcon} />
          <span className={styles.starText}>Aviz with Partners</span>
        </div>
      </header>
      <div className={styles.savingsList}>
        {savingsData.map((item, index) => (
          <div key={index} className={styles.savingsItem}>
            <img
              src={checkmarkImg}
              alt="checkmark"
              className={styles.checkmarkIcon}
            />
            <span className={styles.savingsValue}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.totalSavingsWrapper}>
        <div className={styles.totalSavingsButton}>
          <div className={styles.totalSavingsText}>
            <span>Total Savings</span>
            <span className={styles.totalAmount}>$16,854.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SavingsCard
