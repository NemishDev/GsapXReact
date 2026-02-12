import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const App = () => {

  const [xMove, setXMove]=useState(0)
 const random=gsap.utils.random(-500,500,100) // min , max, range-gap

  const boxRef=useRef(null)

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xMove,
      duration:1,
    })
  },[xMove]) // ye dependency hai  
return(
  <main>
    <button onClick={()=>{
      setXMove(random)
    }}>Animate Button</button>
    <div ref={boxRef} className="box"></div>
  </main>
)
 
}

export default App
