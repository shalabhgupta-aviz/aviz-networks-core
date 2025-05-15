import React from "react"
import * as styles from "./PricingComparison.module.css"

function PricingComparison() {
  const pricingData = [
    { label: "Hardware Price", value: "$114,995" },
    { label: "Hardware Support", value: "$27,540" },
    { label: "Software + Controller", value: "$26,555" },
    { label: "Total TCO", value: "$169,090" },
    { label: "Discount", value: "60%" },
    { label: "Net Price", value: "$67,636" },
  ]

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.categoryTitle}>Category</h3>
        <h3 className={styles.vendorTitle}>Legacy Vendors</h3>
      </header>
      <div className={styles.pricingList}>
        {pricingData.map((item, index) => (
          <div key={index} className={styles.pricingItem}>
            <div>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingComparison
