import React from "react"
import styles from "./componentsCss/CoursesVideos.module.css"

const CoursesVideos = (props) => {
  return (
    <div className={styles.videos}>
      <div className={styles.top}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.cvc}
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.bottom}>#{props.title}</div>
    </div>
  )
}

export default CoursesVideos
