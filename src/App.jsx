import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const App = () => {

  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      delay: 1,
      duration: 2,
      rotate: 360,
      backgroundColor: "blue"
    })
  })

  return (
    <div>
      <div className="box"></div>
    </div>
  )
}

export default App
