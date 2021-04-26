import React from 'react';
import logo from '../images/logo.png';
import menu from '../images/humIcon.svg';

const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light navBg sticky-top">
          <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo"/></a>
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="menuIcon"><img src={menu} alt="menuIcon"/></span>
                </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mt-3  mt-lg-0">
                <li className="nav-item">
                   <a className="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/">services</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/">how to work</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/">portfolio</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#conatct">contact</a>
                </li>
           </ul>
        </div>
     </div>
    </nav>

    )
}

export default Navbar
