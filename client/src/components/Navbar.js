import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function NavBar({ token, logout, user  }) {
  return (
    <header className="pt-0">
      <div>
      
          <>
      <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="moringa logo" /> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <Link className="nav-link " to="/studentdashboard">student</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " to="/admindashboard">Admin</Link> 
          </li>
        
        </ul>
        <div className="d-flex">
        {token ?(
        <>
         <ul className="nav nav-pills nav-fill">
  <li className="nav-item">
  {user && (
    <a className="nav-link me-3" href="#/"> {user} </a>
  )}
  </li>
  <li className="nav-item pt-1">
      <button className="btn btn-outline-danger btn-sm"  onClick={logout}>Logout</button>
      </li>
      </ul>
        </>
        ) : (
<>
  <div className="nav-item pt-0">
  <Link to="/loginform"><button className="btn btn-outline-primary btn-sm me-2" href="login" type="submit">Login</button></Link> 
  <Link to="/signupform"><button className="btn btn-outline-primary btn-sm  " href="register" type="submit">Signup</button></Link> 
 
  </div>
</>
        )}
        </div>
        
      </div>
    </div>
  </nav>
  </>

   </div>
    </header>
     
  );
}

export default NavBar;