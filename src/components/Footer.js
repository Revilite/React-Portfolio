import React from 'react'
import github from "../photos/github.png"
import linkedin from "../photos/linkedin.png"
import twitter from "../photos/twitter.png"

export default function Footer() {
  const styles = {
    div: {
      display: "flex",
      backgroundColor: "#202020",
      padding: "30px",
      paddingBottom: "130px",
      paddingTop: "20px",
      justifyContent: "space-around",
    },
    img: {
      width: "128px",
      height: "128px",
      padding: "10px",
    }
  }
  return (
    <div style={styles.div}>
    <a href="https://github.com"><img style={styles.img} src={github} alt="Github"></img></a>
    <a href="https://www.linkedin.com/in/Revilite"><img style={styles.img} src={linkedin} alt="LinkedIn"></img></a>
    <a href="https://twitter.com/SleeperSeal"><img style={styles.img} src={twitter} alt="Twitter"></img></a>
    </div>
  )
}
