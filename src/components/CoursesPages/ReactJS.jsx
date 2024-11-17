import React from "react"
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const ReactJS = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="vz1RlUyrc3w"
          title="React JS roadmap | Lecture 1"
        />
        <CoursesVideos
          videoId="k3KqQvywToE"
          title="Create react projects | Lecture 2"
        />
        <CoursesVideos
          videoId="Lt4vy8hfc-s"
          title="useEffect, useRef and useCallback | Lecture 3"
        />
        <CoursesVideos videoId="AFDYnd-XPa8" title="Custom hooks | Lecture 4" />
        <CoursesVideos
          videoId="JQVBGtZMqgU"
          title="Context API crash course | Lecture 5"
        />
      </div>
    </>
  )
}

export default ReactJS
