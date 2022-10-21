import React from 'react'
import headShot from "../../photos/headShot.jpg"

export default function About() {
  const styles = {
    section: {
      backgroundColor: "#101010",
      flexGrow: 1,
    },
    h1: {
      color: "white",
      fontSize: "52px",
    },
    p: {
      color: "white",
      fontSize: "24px",
    },
    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

  }

  return (
    <section style={styles.section}>
      <h1 style={styles.h1} className="px-5 py-3">About Me</h1>
      <div style={styles.div}>
        <p style={styles.p} className="d-flex col-10 px-5 mx-5">
          Hello! My name is Jacob Lockhart. I am 18 years old and I am currently enrolled in Univerity of North Carolina at Charlotte's Coding Bootcamp. I have been enrolled for 2 and half months left and I have about 2 weeks left in the class. I've been on my coding journey since I was in middle school and still going strong to this day. I took a AP Computer Science class in highschool that was mainly around Java. In the class that I am currently taking, we are learning HTML, CSS, JavaScript, React and Node.
        </p>
        <img src={headShot} alt="Picture of Jacob Lockhart" width={"350vh"} className="d-flex justify-content-center"></img>
      </div>
    </section>
  )
}
