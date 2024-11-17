import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Tutorials from './pages/Tutorials';
import Contact from './pages/Contact';
import "./App.css"
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import JSPage from './components/CoursesPages/JSPage';
import ReactJS from './components/CoursesPages/ReactJS';
import Html from './components/CoursesPages/Html';
import NodeJS from './components/CoursesPages/NodeJS';
import Css from './components/CoursesPages/Css';
import Php from './components/CoursesPages/Php';
import Python from './components/CoursesPages/Python';
import MongoDb from './components/CoursesPages/MongoDb';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/tutorials' element={<Tutorials />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/courses/jspage' element={<JSPage />}/>
          <Route path='/courses/reactjspage' element={<ReactJS />}/>
          <Route path='/courses/htmlpage' element={<Html />}/>
          <Route path='/courses/nodejspage' element={<NodeJS />}/>
          <Route path='/courses/csspage' element={<Css />}/>
          <Route path='/courses/phppage' element={<Php />}/>
          <Route path='/courses/pythonpage' element={<Python />}/>
          <Route path='/courses/mongodbpage' element={<MongoDb />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
