
import "./index.css"
import { useEffect, useState, useRef} from "react"
import LisaPlaceholder from '..\\..\\..\\public\\pic\\lisaPlaceholder.png'
import GameCard from '../../random/gameCard'
import Popup from "./popup/popup"
import Navbar from "./navbar/navbar"

export default function Index() {
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
          </div>
        </div>
        <Popup/>
        <div id="tooltab">
          ikke weed
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}
