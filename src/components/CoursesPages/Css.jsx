import React from 'react'
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const Css = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="OXGznpKZ_sA"
          title="CSS Tutorial – Full Course for Beginners | Lecture 1"
        />
      </div>
    </>
  )
}

export default Css
