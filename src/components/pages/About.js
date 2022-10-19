import React from 'react'
import anime from "animejs"
export default function About() {
 const move = () => anime({
    targets: '#something',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });


  return (
    <div>
      <h1 onClick={ () => move()}>About Me</h1>
      <svg height="210" width="400">
  {/* <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /> */}
  <path d="M150 0 L75 200 L225 200 Z" id="something"/>
  </svg>
      </div>
  )
}
