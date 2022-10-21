import React from 'react'

export default function Navbar({ currentPage, handlePageChange }) {
  const styles = {
    nav: {
      backgroundColor: "#202020",
    },
    a: {
      color: "#00acf1"
    }
  }

  return (
    <nav style={styles.nav} className="container-fluid">
      <ul className='nav nav-tabs d-flex justify-content-evenly '>
        <li className="nav-item">
          <a  style={styles.a} onClick={() => { handlePageChange("About") }} className={currentPage == "About" ? "nav-link active" : "nav-link"}>
            <h3>About</h3>
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.a} onClick={() => { handlePageChange("Contact") }} className={currentPage == "Contact" ? "nav-link active" : "nav-link"}>
            <h3>Contact</h3>
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.a} onClick={() => { handlePageChange("Portfolio") }} className={currentPage == "Portfolio" ? "nav-link active" : "nav-link"}>
            <h3>Portfolio</h3>
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.a} onClick={() => { handlePageChange("Resume") }} className={currentPage == "Resume" ? "nav-link active" : "nav-link"}>
            <h3>Resume</h3>
          </a>
        </li>
      </ul>
    </nav>
  )
}
