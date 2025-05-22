import React from "react"
import * as styles from "./SearchResourceSection.module.css"

function SearchResourceSection() {
  return (
    <div className={styles.searchResourceSection}>
      <form
        className={styles.searchBarWrapper}
        role="search"
        aria-label="Search resource library"
      >
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Search resource library ..."
          aria-label="Search resource library"
          name="search"
          autoComplete="off"
        />
      </form>
    </div>
  )
}

export default SearchResourceSection
