import axios from "axios";
import {useState} from "react";
import logo from '../assets/logo.png'
import '../css/loginform.css'

function SignupForm({ setToken }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/register`, {
        fullname,
        email,
        role,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
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
  
                  <div className="card-front">
                    <div className="center-wrap">
                      <form className="section text-center pt-0" onSubmit={handleSubmit}>
                        <h4 className="mb-2 pb-0">Sign Up</h4>

                        <img className="mb-2 img" src={logo} alt="logoin" />
  
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            className="form-style"
                            id="fullname"
                            placeholder="Fullname"
                            value={fullname} onChange={(e) => setFullname(e.target.value)} 
                            required
                          />
                          <i className="input-icon bi bi-person-fill-add"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            className="form-style"
                            id="email"
                            placeholder="Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} required
                          />
                          <i className=" input-icon bi bi-envelope-at-fill"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="role"
                            className="form-style"
                            id="role"
                            placeholder="role"
                            value={role} onChange={(e) => setRole(e.target.value)} required
                          />
                         <i className="input-icon bi bi-person-fill-add"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            id="password"
                            className="form-style"
                            placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                         required
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <button
                        type="submit"
                          className="btn1 mt-4 btn btn-outline-info"
                        >
                          Register
                        </button>
                        <p>Already have an account? <a href="/">Login</a> </p>
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

export default SignupForm;