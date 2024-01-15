import React, { useState } from "react";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = new FormData(event.currentTarget);
    console.log('Fetching...');

    try {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      console.log(response);
      const data = await response.json();

      if (data.status === "ok") {
        alert("Registered Successfully");
        navigate("/signin");
      } else {
        alert("Error while registering user: " + data.status.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="section" id="signup">
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form onSubmit={handleSubmit}>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  name="email"
                ></input>
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                ></input>
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                ></input>
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button type="submit">Signup</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link to="/signin" className="link signup-link">
                  SignIn
                </Link>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img
                src="images/google.png"
                alt=""
                className="google-img"
              ></img>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
