import React from 'react'
import logo from '../assets/logo.png'


function Footer(){
    return(
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
           <a href="/"> <img src={logo} width="70px" height="70px" align="left" alt="Logo" /></a>
          </div>
          <div className="footer__social-media">
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
            <i className="fab fa-facebook-f"></i>
           </a>
           <a href="#">
            <i className="fab fa-twitter"></i>
           </a>
          </div>
     
      </div>
      </div>
    </footer>
    
  )
}

export default Footer
