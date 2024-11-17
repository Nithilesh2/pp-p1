import React from 'react'
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const AngularJS = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="aCOBakZSdmE"
          title="AngularJS Tutorial for Beginners - 1 - Introduction"
        />
        <CoursesVideos
          videoId="9dqsjyQA8Tc"
          title="AngularJS Tutorial for Beginners - 2 - Module, Directive, and Expression"
        />
        <CoursesVideos
          videoId="fnrcHvumQl4"
          title="AngularJS Tutorial for Beginners - 3 - ng - init"
        />
        <CoursesVideos
          videoId="fXksSwPj4RU"
          title="AngularJS Tutorial for Beginners - 4 - ng-repeat"
        />
        <CoursesVideos
          videoId="FjJlcJgJvdI"
          title="AngularJS Tutorial for Beginners - 5 - Controllers"
        />
        <CoursesVideos
          videoId="rB_BXeph91w"
          title="AngularJS Tutorial for Beginners - 6 - ng-show and ng-hide"
        />
        <CoursesVideos
          videoId="K64gbvH-yXQ"
          title="AngularJS Tutorial for Beginners - 7 - Filters"
        />
        <CoursesVideos
          videoId="bkI4gHBwJWE"
          title="AngularJS Tutorial for Beginners - 8 - ng-click"
        />
        <CoursesVideos
          videoId="0agoJoQDTnI"
          title="AngularJS Tutorial for Beginners - 9 - Forms and ng-model"
        />
        <CoursesVideos
          videoId="NQfRrpaJJEg"
          title="AngularJS Tutorial for Beginners - 10 - Submitting Forms"
        />
        <CoursesVideos
          videoId="uo-6YS9tmrg"
          title="AngularJS Tutorial for Beginners - 11 - Form Validation"
        />
        <CoursesVideos
          videoId="Y-11iPWBNhg"
          title="AngularJS Tutorial for Beginners - 12 - ng-include and Custom Directives"
        />
        <CoursesVideos
          videoId="6W7u-72dGZY"
          title="AngularJS Tutorial for Beginners - 13 - Dependencies"
        />
      </div>
    </>
  )
}

export default AngularJS
