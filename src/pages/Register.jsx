import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:8875/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      alert(response.data.message)
      navigate("/login")
    } catch (error) {
      console.error("Registration failed:", error)
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
              <h2 className="heading-section pt-20">Register Form</h2>
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
                  <h3 className="mb-4">Register</h3>
                  <form onSubmit={handleRegister} className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
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
                        {loading? 'Loading...': "Register"}
                      </button>
                    </div>
                  </form>
                  <p className="text-center">
                    Already a member? <Link to="/login">Login</Link>
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

export default Register
