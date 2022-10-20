import anime from "animejs";
import React from 'react';

export default function Header(animation) {
  const styles = {
    div: {
      display: "flex",
      backgroundColor: "#606060",
      padding: "30px",
    },
    header: {
      display: "flex",
      color: "white",
      justifyContent: "center",
    }
  }

  return (
    <div style={styles.div} className="p5 m5">
    <h1 style={styles.header} className='container-xl'>
      Welcome
    </h1>
    </div>
  )
}
