import React from "react"
import Navbar from "../components/Navbar"
import CoursesBar from "../components/CoursesBar"
import ExploreCourses from "../components/ExploreCourses"
import styles from "../css/Courses.module.css"

const Courses = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.coursesBox}>
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg"
          tutorialHeader="Javascript Tutorials"
          navigate="/courses/jspage"
          tutorialDesc="JavaScript is a versatile and widely used programming language that powers interactive web applications. With its extensive libraries and frameworks like React and Angular, JavaScript has become a fundamental skill for front-end development."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          tutorialHeader="React JS Tutorials"
          navigate="/courses/reactjspage"
          tutorialDesc="React is a popular JavaScript library for building user interfaces. It provides a component-based approach, enabling developers to create reusable UI elements and efficiently manage application state."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
          tutorialHeader="HTML Tutorials"
          navigate="/courses/htmlpage"
          tutorialDesc="HTML and CSS form the foundation of web development. HTML (Hypertext Markup Language) defines the structure and content of web pages."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          tutorialHeader="Node JS Tutorials"
          navigate="/courses/nodejspage"
          tutorialDesc="Node.js is a powerful runtime environment that allows developers to build scalable and high-performance server-side applications using JavaScript."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          tutorialHeader="CSS Tutorials"
          navigate="/courses/csspage"
          tutorialDesc="CSS (Cascading Style Sheets) controls the presentation and visual styling."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
          tutorialHeader="PHP Tutorials"
          navigate="/courses/phppage"
          tutorialDesc="PHP is a widely used server-side scripting language known for its simplicity and versatility. It is particularly well-suited for web development, enabling developers to create dynamic and interactive websites."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          tutorialHeader="Python Tutorials"
          navigate="/courses/pythonpage"
          tutorialDesc="Python is a versatile and beginner-friendly programming language known for its readability and ease of use."
        />
        <ExploreCourses
          img="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
          tutorialHeader="MongoDB Tutorials"
          navigate="/courses/mongodbpage"
          tutorialDesc="MongoDB is a popular NoSQL database that provides a flexible and scalable solution for storing and retrieving data."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
          tutorialHeader="Angular JS Tutorials"
          navigate="/courses/angularjspage"
          tutorialDesc="AngularJS is a JavaScript framework for building dynamic single-page web applications (SPAs) with features like two-way data binding, dependency injection, and MVC architecture."
        />
        <ExploreCourses
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
          tutorialHeader="PostgreSQL Tutorials"
          navigate="/courses/postgresqlpage"
          tutorialDesc="PostgreSQL is a powerful open-source relational database known for its advanced features, ACID compliance, and support for both SQL and JSON querying."
        />
      </div>
    </>
  )
}

export default Courses
