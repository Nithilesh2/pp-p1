import React from "react"
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const NodeJS = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="ohIAiuHMKMI"
          title="What is Node JS | Lecture 1"
        />
        <CoursesVideos
          videoId="XhCs5cTYW_8"
          title="Hello World NodeJS | Lecture 2"
        />
        <CoursesVideos
          videoId="FSRo41TaHFU"
          title="Modules in NodeJS | Lecture 3"
        />
        <CoursesVideos videoId="YazJFb_i4A0" title="File Handling in NodeJS | Lecture 4" />
        <CoursesVideos
          videoId="ZQsrcayZcSk"
          title="Building HTTP Server in NodeJS | Lecture 5"
        />
        <CoursesVideos videoId="kREAjKyPbSI" title="HTTP METHODS | Lecture 6" />
        <CoursesVideos videoId="_U0pTlpyMGg" title="Deploy NodeJS Application on AWS | NodeJS | Lecture 7" />
      </div>
    </>
  )
}

export default NodeJS
