import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './LoginRegister.css'

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const history = useHistory();

  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const result = (await axios.post("/api/users/login", user)).data;
      localStorage.setItem("currentUser", JSON.stringify(result));
      history.push("/");
    } catch (error) {
      console.log(error);
      setError("Invalid credentials. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="mb-4">Log in to your account</h2>
              {error && <Error msg={error} />}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={Login}
                  >
                    Log in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
