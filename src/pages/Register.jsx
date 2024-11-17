import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import './Register.css'; // Import custom styles if any

const Register = () => {


  return (
    <>
      <Navbar />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section pt-20">Register</h2>
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
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        required
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
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Register
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
