import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

  const boxRef = useRef(null)
  const circleRef = useRef(null)
  const tl=gsap.timeline()

  useGSAP(() => {
    tl.to(boxRef.current, {
      x: 1200,
      rotate: 360,
      duration: 1.5,
      delay:1,
      borderRadius:"50%"
    })

    tl.to(circleRef.current, {
      x: 1200,
      rotate:360,
      duration: 1.5,
      borderRadius:"10px"
    })
  })

  return (
    <div>
      <div className="box" ref={boxRef}></div>
      <div className="circle" ref={circleRef}></div>
    </div>
  )
}

export default App
