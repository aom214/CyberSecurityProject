import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice.js";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to track login error
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error
    try {
      const result = await dispatch(loginUser({ username, password })).unwrap(); // Assuming loginUser returns a promise
      navigate("/"); // Redirect on success
    } catch (err) {
      setError("Login failed. Check your credentials."); // Updated error message
    }
  };

  const dismissError = () => {
    setError(null); // Clear error when dismissed
  };

  return (
    <MDBContainer fluid className="login-container d-flex align-items-center justify-content-center vh-100">
      <MDBRow className="d-flex justify-content-center w-100">
        <MDBCol md="6" lg="4">
          <MDBCard className="login-card">
            <MDBCardBody className="p-5">
              {/* Error Notification */}
              {error && (
                <div className="error-notification mb-4">
                  <span>{error}</span>
                  <button className="close-btn" onClick={dismissError}>
                    &times;
                  </button>
                </div>
              )}

              <div className="text-center mb-5">
                <img
                  src="https://i.imgur.com/pMW2Ee2.png"
                  className="logo"
                  alt="CyberSec Logo"
                  height="100px"
                />
                <h4 className="mt-4 welcome-text">Cyber Security Login</h4>
                <p className="sub-text">Enter your credentials to unlock</p>
              </div>

              <form onSubmit={handleLogin}>
                {/* Username */}
                <div className="input-group mb-4">
                  <label className="form-label stylish-label" htmlFor="username-input">
                    Username
                  </label>
                  <MDBInput
                    id="username-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="custom-input"
                    placeholder="Your username"
                  />
                </div>

                {/* Password */}
                <div className="input-group mb-5">
                  <label className="form-label stylish-label" htmlFor="password-input">
                    Password
                  </label>
                  <MDBInput
                    id="password-input"
Password                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="custom-input"
                    placeholder="Your password"
                  />
                </div>

                <div className="text-center mb-4">
                  <MDBBtn className="w-100 login-btn" type="submit">
                    <i className="fas fa-lock me-2"></i>Unlock Portal
                  </MDBBtn>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="signup-text">Need access?</p>
                <MDBBtn outline className="sign-up-btn" onClick={() => navigate("/signup")}>
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;