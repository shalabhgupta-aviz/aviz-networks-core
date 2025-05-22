import React from "react"
import * as styles from "../Footer.module.css"
import ContactItem from "./ContactItem"

function FooterBottom() {
  const locationIcon =
    '<svg id="37:544" layer-name="Communication / location_on" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 32px; height: 32px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5014 3.31738C21.6614 3.31738 25.8348 7.49072 25.8348 12.6507C25.8348 19.6507 16.5014 29.984 16.5014 29.984C16.5014 29.984 7.16809 19.6507 7.16809 12.6507C7.16809 7.49072 11.3414 3.31738 16.5014 3.31738ZM9.83476 12.6507C9.83476 16.4507 13.7281 22.264 16.5014 25.8241C19.3281 22.2374 23.1681 16.4907 23.1681 12.6507C23.1681 8.97072 20.1814 5.98405 16.5014 5.98405C12.8214 5.98405 9.83476 8.97072 9.83476 12.6507ZM16.5014 15.984C14.6605 15.984 13.1681 14.4917 13.1681 12.6507C13.1681 10.8098 14.6605 9.31738 16.5014 9.31738C18.3424 9.31738 19.8348 10.8098 19.8348 12.6507C19.8348 14.4917 18.3424 15.984 16.5014 15.984Z" fill="white"></path> </svg>'

  const emailIcon =
    '<svg id="37:556" layer-name="Communication / email" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 32px; height: 32px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8348 8.65055C29.8348 7.18389 28.6348 5.98389 27.1681 5.98389H5.83476C4.36809 5.98389 3.16809 7.18389 3.16809 8.65055V24.6506C3.16809 26.1172 4.36809 27.3172 5.83476 27.3172H27.1681C28.6348 27.3172 29.8348 26.1172 29.8348 24.6506V8.65055ZM27.1681 8.65047L16.5014 15.3171L5.83477 8.65047H27.1681ZM27.1681 24.6505H5.83477V11.3171L16.5014 17.9838L27.1681 11.3171V24.6505Z" fill="white"></path> </svg>'

  const phoneIcon =
    '<svg id="37:565" layer-name="Communication / call" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 32px; height: 32px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.22146 7.31714C9.30146 8.50381 9.50146 9.66381 9.82146 10.7705L8.22146 12.3705C7.6748 10.7705 7.32813 9.07714 7.20813 7.31714H9.22146ZM22.3681 23.3438C23.5015 23.6638 24.6615 23.8638 25.8348 23.9438V25.9305C24.0748 25.8105 22.3815 25.4638 20.7681 24.9305L22.3681 23.3438ZM10.5015 4.65039H5.8348C5.10146 4.65039 4.50146 5.25039 4.50146 5.98372C4.50146 18.5037 14.6481 28.6504 27.1681 28.6504C27.9015 28.6504 28.5015 28.0504 28.5015 27.3171V22.6637C28.5015 21.9304 27.9015 21.3304 27.1681 21.3304C25.5148 21.3304 23.9015 21.0637 22.4081 20.5704C22.2748 20.5171 22.1281 20.5037 21.9948 20.5037C21.6481 20.5037 21.3148 20.6371 21.0481 20.8904L18.1148 23.8237C14.3415 21.8904 11.2481 18.8104 9.32813 15.0371L12.2615 12.1037C12.6348 11.7304 12.7415 11.2104 12.5948 10.7437C12.1015 9.25039 11.8348 7.65039 11.8348 5.98372C11.8348 5.25039 11.2348 4.65039 10.5015 4.65039Z" fill="white"></path> </svg>'

  return (
    <section className={styles.bottomSection}>
      <div className={styles.bottomDivider} />
      <div className={styles.bottomContent}>
        <p className={styles.copyright}>
          Copyright © 2025 Aviz Networks, Inc. All Rights Reserved.
        </p>
        <div className={styles.contactContainer}>
          <ContactItem icon={locationIcon} text="Location" />
          <ContactItem icon={emailIcon} text="Email" />
          <ContactItem icon={phoneIcon} text="Phone Number" />
        </div>
      </div>
    </section>
  )
}

export default FooterBottom
