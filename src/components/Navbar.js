import anime from 'animejs'
import React from 'react'

export default function Navbar({currentPage, handlePageChange}) {

  const move = () =>{
    anime({
      targets: '#test',
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 1500,
    });
  }

  return (
      <nav className="display-flex">
      <ul className='nav nav-tabs justify-content-center px-3'>
        <li className="nav-item">
          <a href="#about-me" onClick={() => {handlePageChange("About")}} onMouseEnter={() => move()} id={"test"}  className={currentPage == "About" ? "nav-link active" : "nav-link"}>
          About
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage == "Contact" ? "nav-link active" : "nav-link"}>
          Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage == "Portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage == "Resume" ? "nav-link active" : "nav-link"}>
            Resume
          </a>
        </li>
      </ul>
      </nav>
  )
}