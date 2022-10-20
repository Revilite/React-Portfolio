import React from 'react'

export default function Portfolio() {
  const styles = {
    section: {
      backgroundColor: "#101010",
      flexGrow: 1, 
    },
    h1: {
      color: "white",
    }
  }
  return (
    <section style={styles.section}>
    <h1 style={styles.h1}>Portfolio</h1>
    </section>
  )
}
