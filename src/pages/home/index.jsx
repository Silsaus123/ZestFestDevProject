

import "./index.css"
import { useEffect, useState, useRef} from "react"
import LisaPlaceholder from '..\\..\\..\\public\\pic\\lisaPlaceholder.png'
import GameCard from '../../random/gameCard'
import Thermostat from "./thermostat.jsx"
import trollman2 from '..\\..\\..\\public\\pic\\trollman2.png'
import dayProDict from "../dayprodict/dayProDict.jsx"
import Spørsmål from "../dayprodict/spørsmål.jsx"

export default function Index() {

   const heatRef = useRef(null)
   const [heat, setHeat]= useState(null)
   const heightPercent = Math.max(0, Math.min(100, 100 - heat)); 

   const handleTempUp = () => {
    setHeat(prev => prev += 5)
   }
   console.log(heat)

   const handleTempDown = () => {
    setHeat(prev => prev -= 5)
    }


  return (
    <div id="background">
      <header id="header">
        <h1>Zesty Games</h1>
      </header>
      <main>
        {/* <Navbar /> navbar not finished SANDRA HELPPPP*/} 
        <div className='games'>
          <div className='lisa'>
            <GameCard 
            image={LisaPlaceholder}
            title={"Lisa Clicker"}
            link={"/lisa"}
            />
            <GameCard
            image={trollman2}
            title={"DayProDih"}
            link={"/dayprodih"}/>
            <button onClick={handleTempUp}>Lisa omg plzzzzzzzzzzzzzzzzzzzzzzzzz</button>
            <p>{heat}lisa thick thick juicy sass uten s på begynelsen </p> 
            <button onClick={handleTempDown}>tempen går NEDDDD</button>
          </div>
        </div>
        <div>
          <Thermostat heat = {heat} heightPercent = {heightPercent}/>
        </div>
        <div id="tooltab">
          ikke weed
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}
