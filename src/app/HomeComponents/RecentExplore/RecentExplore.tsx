import React from 'react'
import styles from "./RecentExplore.module.css"
import ConsoleBox from './components/ConsoleBox'
import PrimaryLayout from '@/utils/components/PrimaryLayout'

const RecentExplore = () => {
  return (
    <PrimaryLayout>
    <div className={styles["RecentExplore--container"]}>
        <h2 className={styles["title"]}>Recent Explore</h2>
        <p>1 out of 3</p>
        <div className={styles["cards--container"]}>
            <ConsoleBox/>
        </div>
    </div>
    </PrimaryLayout>
  )
}

export default RecentExplore