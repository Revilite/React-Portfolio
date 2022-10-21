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
      justifyContent: "center"
    },
    p: {
      color: "white",
      fontFamily: "Permanent Marker",
      fontSize: "62px",
      textShadow: "0px 0px 40px #FFFFFF"
    }

  }

  return (
    <div style={styles.div} className="p5 m5">
    <h1 style={styles.header} className='container-xl'>
      <p style={styles.p}>Welcome</p>
    </h1>
    </div>
  )
}
