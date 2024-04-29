import React from 'react'
import styles from "./Contributions.module.css"

const Contributions = () => {
  return (
    <div className={styles["contributions--main--container"]}>
      <div className={styles["contributions--container"]}>
        <h2 className={styles["title"]}>Contributions</h2>
        <div className={styles["links--container"]}>
          <ul>
            {
              Array.from({ length: 5 }, (_, i) => i + 1)
                .map((_, key) => <li key={key}>Quis nostrud exercitation ullamco laboris.</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contributions