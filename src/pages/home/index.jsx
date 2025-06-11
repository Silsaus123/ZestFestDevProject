
import "./index.css"
import LisaPlaceholder from "./../../pic/lisaPlaceholder.png"
import GameCard from '../../random/gameCard'

export default function Index() {
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
          </div>
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
