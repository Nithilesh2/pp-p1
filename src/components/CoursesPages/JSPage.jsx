import React from "react"
import CoursesVideos from "../CoursesVideos"
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import styles from "./CoursesPages.module.css"

const JSPage = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="ajdRvxDWH4w"
          title="Variables & Data Types | Lecture 1"
        />
        <CoursesVideos
          videoId="Zg4-uSjxosE"
          title="Operators and Conditional Statements | Lecture 2"
        />
        <CoursesVideos
          videoId="UmRtFFSDSFo"
          title="Loops and Strings | Lecture 3"
        />
        <CoursesVideos videoId="gFWhbjzowrM" title="Arrays | Lecture 4" />
        <CoursesVideos
          videoId="P0XMXqDGttU"
          title="Functions & Methods | Lecture 5"
        />
        <CoursesVideos
          videoId="7zcXPCt8Ck0"
          title="DOM - Document Object Model | Lecture 6"
        />
      </div>
    </>
  )
}

export default JSPage
