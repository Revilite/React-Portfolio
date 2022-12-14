import React from 'react'

export default function Contact() {

  const styles = {
    section: {
      backgroundColor: "#101010",
      flexGrow: 1,
    },
    h1: {
      color: "white",
      fontSize: "52px"
    },
    h2: {
      color: "white"
    },
    name: {
      width: "20%",
      backgroundColor: "#202020",
      color: "white",
      fontSize: "18px",
    },
    email: {
      width: "30%",
      backgroundColor: "#202020",
      color: "white",
      fontSize: "18px",
    },
    message: {
      width: "30%",
      backgroundColor: "#202020",
      color: "white",
      fontSize: "24px",
      height: "300px",
    },
    button: {
      width: "10%",
      color: "white",
      backgroundColor: "#202020",
      borderColor: "white",
      fontSize: "20px"
    }

  }
  return (
    <section style={styles.section}>
      <h1 style={styles.h1} className="px-5 py-3">Contact</h1>
      <form className="p-3 mx-5 row">
        <div>
          <h2 style={styles.h2} className="py-1 form-label">Name</h2>
          <input type={"text"} className="form-control" style={styles.name} required></input>
        </div>
        <div>
          <h2 style={styles.h2} className="py-3 form-label">Email</h2>
          <input type={"email"} id="email" className="form-control" style={styles.email} required></input>
        </div>
        <div>
          <h2 style={styles.h2} className="py-3 form-label">Message</h2>
          <textarea className="form-control" style={styles.message} maxLength={300} required></textarea>
        </div>
        <button style={styles.button} type="submit" className='py-3 m-3 rounded'>Submit</button>
      </form>
    </section>
  )
}
