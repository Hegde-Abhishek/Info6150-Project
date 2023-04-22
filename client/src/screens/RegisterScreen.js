import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './LoginRegister.css'

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const history = useHistory();

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
      };
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const result = (await axios.post("/api/users/register", user)).data;
        localStorage.setItem("currentUser", JSON.stringify(result));
        history.push("/home");
      } catch (error) {
        console.log(error);
        setError("Registration failed. Please try again.");
      }
      setLoading(false);
    } else {
      setError("Password not matched");
    }
  }

  return (
    <div className="container-fluids vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="mb-4">Register for an account</h2>
              {error && <Error msg={error} />}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    required
                  />
                </div>
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={register}
                  >
                    Register
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

export default RegisterScreen;
