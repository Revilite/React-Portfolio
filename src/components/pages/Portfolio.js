import React from 'react'
import quiz from "../../photos/coding_quiz.png"
import simulator  from "../../photos/combat_Simulator.png"
import password  from "../../photos/password_Generator.png"
import schedule  from "../../photos/schedule_maker.png"
import team  from "../../photos/team_profile_generator.png"
import weather  from "../../photos/weather_Dashboard.png"


export default function Portfolio() {
  const styles = {
    section: {
      backgroundColor: "#101010",
      flexGrow: 1,
    },
    h1: {
      color: "white",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "30% 35% 30% ",
      textAlign: "center",
      color: "white"
    },
    gridItem: {
      paddingBottom : "10px",
      paddingLeft: "10px"
    },
    img: {
      width: "450px",
    }
  }
  return (
    <section style={styles.section}>
      <h1 style={styles.h1} className="px-5 py-3">Portfolio</h1>

      <div style={styles.gridContainer} >
        <div style={styles.gridItem}>
          <a href="https://github.com/Revilite/Code-Quiz" ><img src={quiz} alt="coding quiz" style={styles.img}></img></a>
          <h3>Coding Quiz</h3>
        </div>
        <div style={styles.gridItem}>
          <a href="https://github.com/Christian-Hoffman/combat-simulator" ><img src={simulator} alt="Combat Simulator" style={styles.img}></img></a>
          <h3>Combat Simulator</h3>
        </div>
        <div style={styles.gridItem}>
          <a href="https://github.com/Revilite/Password-Generator" ><img src={password} alt="Password Generator" style={styles.img}></img></a>
          <h3>Password Generator</h3>
        </div>
        <div style={styles.gridItem}>
          <a href="https://github.com/Revilite/Schedule-Maker" ><img src={schedule} alt="Schedule Maker" style={styles.img}></img></a>
          <h3>Schedule Maker</h3>
        </div>
        <div style={styles.gridItem}>
          <a href="https://github.com/Revilite/Team-Profile-Generator" ><img src={team} alt="Team Profile Generator" style={styles.img}></img></a>
          <h3>Team Profile Generator</h3>
        </div>
        <div style={styles.gridItem}>
          <a href="https://github.com/Revilite/Weather-Dashboard" ><img src={weather} alt="Weather Dashboard" style={styles.img}></img></a>
          <h3>Weather Dashboard</h3>
        </div>
      </div>
    </section >
  )
}
