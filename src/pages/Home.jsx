import React from "react"
import styles from "../css/Home.module.css"
import Navbar from "../components/Navbar"
import CoursesBar from "../components/CoursesBar"
import { TypeAnimation } from "react-type-animation"
import ExploreCourses from "../components/ExploreCourses"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className={styles.hero}>
        <Navbar />
        <CoursesBar />
        <div className={styles.rowOne}>
          <div className={styles.rowOneLeft}>
            <h2 className={styles.rowOneLeftWelcome}>WELCOME TO</h2>
            <h1 className={styles.rowOneLeftGovardhan}>Govardhan</h1>
            <h1 className={styles.rowOneLeftTech}>Tech</h1>
          </div>
          <div className={styles.rowOneRight}>
            <img
              src="https://e-learning-rs8h.onrender.com/images/pexels-pixabay-39284.jpg"
              alt="img1"
              className={styles.img1}
            />
          </div>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.rowTwoLeft}>
            <img
              src="https://e-learning-rs8h.onrender.com/images/about.jpg"
              alt="img2"
              className={styles.img2}
            />
          </div>
          <div className={styles.rowTwoRight}>
            <h2 className={styles.rowTwoAboutUs}>About Us</h2>
            <div className={styles.rowTwoTypeAnimation}>
              <TypeAnimation
              className={styles.rowTwoTypeAnimationT}
                sequence={[
                  "Learn JavaScript",
                  1000,
                  "Learn Frontend",
                  1000,
                  "Learn Backend",
                  1000,
                  "Learn HTML",
                  1000,
                  "Learn CSS",
                  1000,
                  "Learn React",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className={styles.rowTwoPara}>
              Confused on which course to take? I have got you covered. Its
              free! GovardhanTechnical is my attempt to teach basics and those
              coding techniques to people in short time which took me ages to
              learn.
            </p>
            <div className={styles.rowTwoButtonBox}>
              <button type="button" className={styles.rowTwoButton}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rowThree}>
          <div className={styles.rowThreeTop}>
            <h2 className={styles.rowThreeTopCourses}>COURSES</h2>
          </div>
          <div className={styles.rowThreeMiddle}>
            <h2 className={styles.rowThreeMiddleExplore}>
              Explore Popular Courses
            </h2>
          </div>
          <div className={styles.rowThreeBottom}>
            <div className={styles.rowThreeBottomJST}>
              <ExploreCourses
                img="https://e-learning-rs8h.onrender.com/images/javascript-banner.jpg"
                tutorialHeader="Javascript Tutorials"
                tutorialDesc="JavaScript is a versatile and widely used programming language that powers interactive web applications."
              />
            </div>
            <div className={styles.rowThreeBottomPYT}>
              <ExploreCourses
                img="https://e-learning-rs8h.onrender.com/images/puthon-banner.jpeg"
                tutorialHeader="Python Tutorials"
                tutorialDesc="Python is a versatile and beginner-friendly programming language known for its readability and ease of use."
              />
            </div>
            <div className={styles.rowThreeBottomNDT}>
              <ExploreCourses
                img="https://e-learning-rs8h.onrender.com/images/Nodejs-banner.jpeg"
                tutorialHeader="Node JS Tutorials"
                tutorialDesc="Node.js is a powerful runtime environment that allows developers to build scalable and high-performance server-side applications using JavaScript."
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
