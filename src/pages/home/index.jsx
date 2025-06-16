
import "./index.css"
import LisaPlaceholder from "./../../pic/lisaPlaceholder.png"
import GameCard from '../../random/gameCard'

export default function Index() {
  return (
    <div id="background">
      <div id="header">
        <h1>Zesty Games</h1>
      </div>

      <div className='games'>
        <div className='lisa'>
          <GameCard
          image={LisaPlaceholder}
          title={"Lisa Clicker"}
          link={"/lisa"}
          />
        </div>
      </div>
    </div>
  )
}
