import React from "react"
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const Php = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="zZ6vybT1HQs"
          title="PHP Full Course for non-haters 🐘 | Lecture 1"
        />
        <CoursesVideos
          videoId="OK_JCtrrv-c"
          title="PHP Programming Language Tutorial | Lecture 2"
        />
        <CoursesVideos
          videoId="V821daR3UcM"
          title="PHP Tutorial For Beginners | FREE PHP Full Course 🔥 | Lecture 3"
        />
      </div>
    </>
  )
}

export default Php
