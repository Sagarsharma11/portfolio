import React from 'react'
import styles from "../Portfolio.module.css"

const Card = () => {
  return (
    <div className={styles['card--box']}>
        <div className={styles["image--container"]}>
            <img src="/image/profile.webp" alt="" />
        </div>
        <div className={styles['card--links']}>
            <a href='#' >Go</a>
        </div>
    </div>
  )
}

export default Card