"use client"
import React, { useState } from "react"
import * as styles from "./SpeedSelector.module.css"

function SpeedSelector() {
  const [activeSpeed, setActiveSpeed] = useState("800GbE")

  const speeds = ["800GbE", "400GbE", "100GbE", "25GbE", "10GbE", "1GbE"]

  return (
    <div className={styles.container}>
      <div className={styles.speedTabs}>
        {speeds.map(speed => (
          <div key={speed} className={styles.tabWrapper}>
            <button
              className={`${styles.speedTab} ${
                activeSpeed === speed ? styles.activeTab : styles.inactiveTab
              }`}
              onClick={() => setActiveSpeed(speed)}
            >
              {speed}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.gradientBar} />
    </div>
  )
}

export default SpeedSelector
