import "./popup.css"
import { useEffect, useState, useRef} from "react"

export default function Popup() {
  const [distance, setDistance] = useState(542)
  const speedRef = useRef(1000)
  const intervalRef = useRef(null)

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, []) // only once on mount

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDistance(prev => (prev > 0 ? prev - 1 : 0))
    }, speedRef.current)
  }

  const handleClick = () => {
    speedRef.current = Math.max(50, speedRef.current / 4)
    startInterval() // restart interval with new speed
  }

  return (
    <div className="popup">
        <div id="hot">
            <div className="xcontainer">
              <button id="xbtn" onClick={handleClick}>x</button>
            </div>
            <p>Hot SINGLE men in your area</p>
        </div>
        <div id="chatNow">
            <p id="LOVE">Looking  for LOVE . . .</p>
            <p id="chat">Chat now: WWW.FreeSayGex.com</p>
        </div>
        <div className="imgrow">
          <img src="public/pic/wriothesley.jpeg" alt="Rizz" />
          <img src="public/pic/chat.PNG" alt="chat" id="chatimg"/>
        </div>
        <p id="distancetext">{distance} KM away</p>
    </div>
  )
}
