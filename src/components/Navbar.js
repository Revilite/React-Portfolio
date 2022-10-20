import anime from 'animejs'
import React from 'react'

export default function Navbar({currentPage, handlePageChange}) {


  return (
      <nav className="container-fluid">
      <ul className='nav nav-tabs d-flex justify-content-evenly '>
        <li className="nav-item">
          <a href="/#about" onClick={() => {handlePageChange("About")}} className={currentPage == "About" ? "nav-link active" : "nav-link"}>
          <h3>About</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#contact" onClick={() => {handlePageChange("Contact")}}  className={currentPage == "Contact" ? "nav-link active" : "nav-link"}>
          <h3>Contact</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#portfolio" onClick={() => {handlePageChange("Portfolio")}}  className={currentPage == "Portfolio" ? "nav-link active" : "nav-link"}>
          <h3>Portfolio</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#resume" onClick={() => {handlePageChange("Resume")}}  className={currentPage == "Resume" ? "nav-link active" : "nav-link"}>
          <h3>Resume</h3>
          </a>
        </li>
      </ul>
      </nav>
  )
}
