import React from "react"
import * as styles from "./SavingsCard.module.css"

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
        <h3 className={styles.savesTitle}>Saves</h3>
        <p className={styles.savesPercentage}>
          <span className={styles.percentageValue}>25</span>
          <span className={styles.percentageSymbol}>%</span>
        </p>
      </header>
      <div className={styles.savingsList}>
        {savingsData.map((item, index) => (
          <div key={index} className={styles.savingsItem}>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: renderCheckmarkIcon(item.label),
                }}
              />
            </div>
            <div className={styles.savingsValue}>{item.value}</div>
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

function renderCheckmarkIcon(label) {
  // This function returns the SVG for each item based on the label
  // In a real implementation, you might want to use a more dynamic approach

  if (label === "Hardware Price") {
    return '<svg id="141:124" width="128" height="30" viewBox="0 0 128 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[127px] h-[30px]"> <path d="M24 13.4371V14.5066C23.9986 16.9865 23.1956 19.3995 21.7107 21.3857C20.2259 23.3719 18.1388 24.8249 15.7607 25.5281C13.3825 26.2312 10.8408 26.1468 8.51464 25.2874C6.18843 24.4279 4.20235 22.8396 2.8526 20.7592C1.50286 18.6788 0.86176 16.2179 1.02493 13.7433C1.1881 11.2688 2.14679 8.91336 3.75802 7.02822C5.36926 5.14307 7.5467 3.82927 9.96562 3.28275C12.3845 2.73623 14.9153 2.98627 17.1805 3.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 4.15662L12.5 16.8066L9.05005 13.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.0938" y="23.536">$54,948</tspan></text> </svg>'
  } else if (label === "Hardware Support") {
    return '<svg id="141:131" width="116" height="30" viewBox="0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[115px] h-[30px]"> <path d="M24 14.4371V15.5066C23.9986 17.9865 23.1956 20.3995 21.7107 22.3857C20.2259 24.3719 18.1388 25.8249 15.7607 26.5281C13.3825 27.2312 10.8408 27.1468 8.51464 26.2874C6.18843 25.4279 4.20235 23.8396 2.8526 21.7592C1.50286 19.6788 0.86176 17.2179 1.02493 14.7433C1.1881 12.2688 2.14679 9.91336 3.75802 8.02822C5.36926 6.14307 7.5467 4.82927 9.96562 4.28275C12.3845 3.73623 14.9153 3.98627 17.1805 4.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 5.15662L12.5 17.8066L9.05005 14.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.3887" y="23.536">$3,280</tspan></text> </svg>'
  } else if (label === "Software + Controller") {
    return '<svg id="141:138" width="116" height="30" viewBox="0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[115px] h-[30px]"> <path d="M24 13.4371V14.5066C23.9986 16.9865 23.1956 19.3995 21.7107 21.3857C20.2259 23.3719 18.1388 24.8249 15.7607 25.5281C13.3825 26.2312 10.8408 26.1468 8.51464 25.2874C6.18843 24.4279 4.20235 22.8396 2.8526 20.7592C1.50286 18.6788 0.86176 16.2179 1.02493 13.7433C1.1881 11.2688 2.14679 8.91336 3.75802 7.02822C5.36926 5.14307 7.5467 3.82927 9.96562 3.28275C12.3845 2.73623 14.9153 2.98627 17.1805 3.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 4.15662L12.5 16.8066L9.05005 13.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.3887" y="23.536">$5,250</tspan></text> </svg>'
  } else if (label === "Total TCO") {
    return '<svg id="141:144" width="128" height="30" viewBox="0 0 128 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[127px] h-[30px]"> <path d="M24 13.4371V14.5066C23.9986 16.9865 23.1956 19.3995 21.7107 21.3857C20.2259 23.3719 18.1388 24.8249 15.7607 25.5281C13.3825 26.2312 10.8408 26.1468 8.51464 25.2874C6.18843 24.4279 4.20235 22.8396 2.8526 20.7592C1.50286 18.6788 0.86176 16.2179 1.02493 13.7433C1.1881 11.2688 2.14679 8.91336 3.75802 7.02822C5.36926 5.14307 7.5467 3.82927 9.96562 3.28275C12.3845 2.73623 14.9153 2.98627 17.1805 3.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 4.15662L12.5 16.8066L9.05005 13.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.0938" y="23.536">$63,478</tspan></text> </svg>'
  } else if (label === "Discount") {
    return '<svg id="141:151" width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[91px] h-[30px]"> <path d="M24 12.4371V13.5066C23.9986 15.9865 23.1956 18.3995 21.7107 20.3857C20.2259 22.3719 18.1388 23.8249 15.7607 24.5281C13.3825 25.2312 10.8408 25.1468 8.51464 24.2874C6.18843 23.4279 4.20235 21.8396 2.8526 19.7592C1.50286 17.6788 0.86176 15.2179 1.02493 12.7433C1.1881 10.2688 2.14679 7.91336 3.75802 6.02822C5.36926 4.14307 7.5467 2.82927 9.96562 2.28275C12.3845 1.73623 14.9153 1.98627 17.1805 2.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 3.15662L12.5 15.8066L9.05005 12.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.4951" y="23.536">20%</tspan></text> </svg>'
  } else {
    return '<svg id="141:157" width="128" height="30" viewBox="0 0 128 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[127px] h-[30px]"> <path d="M24 13.4371V14.5066C23.9986 16.9865 23.1956 19.3995 21.7107 21.3857C20.2259 23.3719 18.1388 24.8249 15.7607 25.5281C13.3825 26.2312 10.8408 26.1468 8.51464 25.2874C6.18843 24.4279 4.20235 22.8396 2.8526 20.7592C1.50286 18.6788 0.86176 16.2179 1.02493 13.7433C1.1881 11.2688 2.14679 8.91336 3.75802 7.02822C5.36926 5.14307 7.5467 3.82927 9.96562 3.28275C12.3845 2.73623 14.9153 2.98627 17.1805 3.99558" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.15 4.15662L12.5 16.8066L9.05005 13.3566" stroke="#6C44DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="#070710" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="22" font-weight="bold" letter-spacing="0em"><tspan x="46.0938" y="23.536">$50,782</tspan></text> </svg>'
  }
}

export default SavingsCard
