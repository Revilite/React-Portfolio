import anime from "animejs";
import React from 'react';
import bannerBackground from "../photos/abstract_Banner.png"


export default function Header(animation) {
  const styles = {
    div: {
      display: "flex",
      backgroundImage: `url(${bannerBackground})`,
      padding: "30px",
    },
    header: {
      display: "flex",
      color: "white",
      justifyContent: "center",
      fontFamily: "Permanent Marker",
      fontSize: "75px"
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
