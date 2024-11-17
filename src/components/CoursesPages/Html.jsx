import React from "react"
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const Html = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos videoId="XmLOwJHFHf0" title="HTML | Lecture 1" />
        <CoursesVideos
          videoId="v-xdY6VFcio"
          title="Core structure of HTML and Meta tags | Lecture 2"
        />
        <CoursesVideos
          videoId="CetKwpx3t6g"
          title="Heading, paragraph and reading docs | Lecture 3"
        />
        <CoursesVideos
          videoId="T_ca5aO3WN0"
          title="Links and Images with Map | Lecture 4"
        />
        <CoursesVideos
          videoId="d2Tb9hd9pHM"
          title="Tables in HTML | Lecture 5"
        />
        <CoursesVideos
          videoId="I7LrS1z_WNA"
          title="Class ID and iframe | Lecture 6"
        />
        <CoursesVideos
          videoId="YR2fepUAp5c"
          title="Types of input forms | Lecture 7"
        />
        <CoursesVideos
          videoId="pYSXmQCrxlw"
          title="HTML series over, what next | Lecture 8"
        />
      </div>
    </>
  )
}

export default Html
