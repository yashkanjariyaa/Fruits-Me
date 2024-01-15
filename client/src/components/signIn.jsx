import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
export default function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(response);
      const data = await response.json();
      if (data.user) {
        localStorage.setItem("token", data.user);
        localStorage.setItem("userEmail", data.user.email);
        alert("Login Successful");
        navigate("/home");
        console.log(data);
      } else if (data.error) {
        console.log("invalid" + data.error);
        alert("Please register");
      } else {
        alert("please type in correct password");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="section" id="signin">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button onClick={handleSubmit}>Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="/signup" className="link signup-link">
                  Signup
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
              <img src="images/google.png" alt="" className="google-img"></img>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
