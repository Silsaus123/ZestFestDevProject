import "./popup.css"
import { useEffect, useState, useRef} from "react"

export default function Popup() {
  //genererer fra 0-1
  //multipliserer med 523 - 231 + 1 = 292
  //min value 0 * 292 = 0 + 231 = 231 
  //top value 1 * 292 = 292 + 231 = 523.999 (not inclusive = 523) 
  const [distance, setDistance] = useState(Math.floor(Math.random() * (523 - 231 + 1) + 231))
  const speedRef = useRef(1000)
  const intervalRef = useRef(null)

  const [positionRight, setPositionRight] = useState(0)
  let counterRef = useRef(0)
  const [moveLeft, setMoveLeft] = useState(true)
  const [visible, setVisible] = useState(true)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(true)

  const handleMove = () => {
    counterRef.current += 1
    counterRef.current < 3 ? setPositionRight(prev => prev + 50) : setMoveLeft(false)

    counterRef.current == 4 ? setVisible(false) : setVisible(true)
    counterRef.current == 4 ? setVisible2(true) : setVisible2(false)
    counterRef.current == 5 ? setVisible3(false) : setVisible3(true)
    
    console.log(counterRef.current, "moveLeft", moveLeft, "visible", visible, "visible2", visible2, "visible3", visible3)
  }

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, []) // resetter interval on mount

  const startInterval = () => {
    clearInterval(intervalRef.current) //stopper fra å ha multiple intervals på en gang (JS funksjon)

    //setInterval JS funksjon, kjører kode inni curly brace, interval er speed Ref etter curly
    intervalRef.current = setInterval(() => {
      setDistance(prev => (prev > 0 ? prev - 1 : 0))
    }, speedRef.current)
  }

  const handleSpeed = () => {
    speedRef.current = speedRef.current > 4 ? speedRef.current / 4 : speedRef.current = 4
    startInterval() // restart interval with new speed
    console.log(speedRef.current)
  }

  return (
    <div className="popup" style={{
      display: visible3 ? "block" : "none"
    }}>
      <div className="nextXdiv" style={{
        display: visible2 ? "block" : "none"
      }}>
        <button className="nextX" id="xbtn" onClick={handleMove}>X</button>
      </div>
        <div id="hot">
            <div className="xcontainer" style={{
              paddingRight: `${positionRight}px`, 
              justifyContent: moveLeft ? "flexEnd" : "flex-start", 
              display: visible ? "default" : "none"  
              }}>
                <button id="xbtn" onClick={handleMove}>x</button>
            </div>
            <p>Hot SINGLE men in your area</p>
        </div>
        <div id="chatNow">
            <p id="LOVE">Looking  for LOVE . . .</p>
            <button onClick={handleSpeed}>Chat Now!</button>
            <p id="chat">WWW.FreeSayGex.com</p>
        </div>
        <div className="imgrow">
          <img src="public/pic/wriothesley.jpeg" alt="Rizz" />
          <img src="public/pic/chat.PNG" alt="chat" id="chatimg"/>
        </div>
        <p id="distancetext">{distance} KM away</p>
    </div>
  )
}
