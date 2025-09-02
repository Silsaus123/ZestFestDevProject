

import "./index.css"
import LisaPlaceholder from '..\\..\\..\\public\\pic\\lisaPlaceholder.png'
import GameCard from '../../random/gameCard'
import Thermostat from "./thermostat.jsx"
import { useEffect, useState, useRef } from "react";

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



    //  if( box.style.background == 'red'){
    //    box.style.background = 'blue';
    // }
    // else{
    //     box.style.background = 'red';
    // }

   

  return (
    <div id="background">
      <header id="header">
        <h1>Zesty Games</h1>
      </header>
      <main>
         <div className='games'>
          <div className='lisa'>
            <GameCard 
            image={LisaPlaceholder}
            title={"Lisa Clicker"}
            link={"/lisa"}
            />
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
