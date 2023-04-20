import axios from "axios";
import { useState } from "react";
import logo from '../assets/logo.png'
import '../css/loginform.css'

function LoginForm({ setToken, setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userRole", response.data.user.role); // Store the role of the logged-in user
      setToken(response.data.token);
      setUserRole(response.data.user.role); // Set the role of the logged-in user
      console.log(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="section pt-0">
      <div className="container pt-0">
        <div className="row full-height justify-content-center pt-0">
          <div className="col-12 py-5 pt-0">
            <div className="section pb-0 pt-0 pt-sm-0 text-center pt-0">
              <div className="card-3d-wrap mx-auto pt-0">
                <div className="card-3d-wrapper">
                  <div className="card-front bg-dak">
                    <div className="center-wrap">
                      <form
                        onSubmit={handleSubmit}
                        className="section text-center"
                      >
                        <h4 className="mb-3 pb-0">Log In</h4>
                        <img className="mb-4 img" src={logo} alt="logoin" />
                        <p>Sign in to your account</p>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-style"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <i className="input-icon bi bi-person-fill-add"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <button
                          type="submit"
                          className="btn1 mt-4 btn btn-outline-info"
                        >
                          Login
                        </button>
                        <p className="mb-0 mt-4 text-center">
                          <a href="/resetpassword" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;


