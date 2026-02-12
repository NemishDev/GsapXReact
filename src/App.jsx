import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

 useGSAP(function(){
  gsap.to(".box",{
    rotate:360,
    duration:1.5,
    delay:1
  })
 }, {scope:'.container1'})

  return (
    <main>
     <div className="container1">
       <div className="box"></div>
       <div className="circle"></div>
     </div>
     <div className="container2">
       <div className="box"></div>
       <div className="circle"></div>
     </div>
    </main>
  )
}

export default App
