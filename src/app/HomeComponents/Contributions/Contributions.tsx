import React from 'react'
import styles from "./Contributions.module.css"

const Contributions = () => {
  const data = [
    {
      title:"Days of python",
      link:"https://github.com/Sagarsharma11/Days_of_python"
    },
    {
      title:"Production Ready Backend",
      link:"https://github.com/Sagarsharma11/production_ready_backend"
    },
    {
      title:"Google Drive API Integration",
      link:"https://github.com/Sagarsharma11/g-drive-googleapis"
    },
    {
      title:"Zero To Hero Node.js",
      link:"https://github.com/Sagarsharma11/zero_to_hero_nodejs"
    },
    {
      title:"Real Time Chat App Socket.io",
      link:"https://github.com/Sagarsharma11/chatApp_socketio/"
    },
  ]
  return (
    <div className={styles["contributions--main--container"]}>
      <div className={styles["contributions--container"]}>
        <h2 className={styles["title"]}>Contributions</h2>
        <div className={styles["links--container"]}>
          <ul>
            {
              data
                .map((ele, key) => <li key={key}><a href={ele.link} target='_blank'> {ele.title}</a></li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contributions