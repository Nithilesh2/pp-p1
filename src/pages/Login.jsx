import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post(
        // "http://localhost:8875/login",
        "https://pp-p1-govardhan-backend.onrender.com/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      const { userId, userName } = response.data
      localStorage.setItem("userId", userId)
      localStorage.setItem("userName", userName)
      navigate("/")
    } catch (error) {
      alert(error.response.data.message)
      console.error("Login failed:", error)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section pt-20">Login Form</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="login-div wrap d-md-flex">
                <img
                  src="https://raw.githubusercontent.com/LoginRadius/awesome-login-pages/refs/heads/main/login-form-15/login-form-15/images/bg-1.jpg"
                  alt="1"
                  className="login-image"
                />
                <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-4">Log In</h3>
                  <form onSubmit={handleLogin} className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        {loading? 'Loading...': "Log In"}
                      </button>
                    </div>
                  </form>
                  <p className="text-center">
                    Not a member? <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
