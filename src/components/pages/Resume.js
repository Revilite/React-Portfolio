import React from 'react'
import resume from "../../photos/resume.png"

export default function Resume() {
  const styles = {
    section: {
      backgroundColor: "#101010",
      flexGrow: 1,
    },
    h1: {
      color: "white",
    },
    p: {
      color: "white",
    },
    div: {
      color: "white",
      paddingLeft: "16px",
      paddingDown: "24px"
    },
    h4: {
      paddingLeft: "24px",
    }
  }
  return (
    <section style={styles.section}>
      <h1 style={styles.h1} className="px-5 py-3">Resume</h1>
      <p style={styles.p} className="px-5 mx-5">Download My <a style={styles.p} href={resume}>Resume</a> </p>

      <div style={styles.div}>
        <h2>Front-end Proficiencies:</h2>
        <h4 style={styles.h4}>&bull; HTML</h4>
        <h4 style={styles.h4}>&bull; JavaScript</h4>
        <h4 style={styles.h4}>&bull; CSS</h4>
        <h4 style={styles.h4}>&bull; jQuery</h4>
        <h4 style={styles.h4}>&bull; React</h4>
        <h4 style={styles.h4}>&bull; Bootstrap</h4>
      </div>
      <div style={styles.div}>
        <h2>Back-end Proficiencies</h2>
        <h4 style={styles.h4}>&bull; APIs</h4>
        <h4 style={styles.h4}>&bull; Node</h4>
        <h4 style={styles.h4}>&bull; Express</h4>
        <h4 style={styles.h4}>&bull; MySQL, Sequelize</h4>
        <h4 style={styles.h4}>&bull; MongoDB</h4>
      </div>


    </section>
  )
}
