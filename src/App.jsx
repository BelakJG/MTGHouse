import { useState } from "react"
import House from "./assets/House.jpg"
import Robot from "./assets/Robot.webp"
import Puzzlebox from "./assets/Puzzlebox.webp"
import Treasure from "./assets/Treasure.jpg"
import Clue from "./assets/Clue.webp"
import Food from "./assets/Food.jpg"
import Academy from "./assets/Academy.jpg"
import Wyll from "./assets/Wyll.webp"

import Advantage from "./components/advantage"
import "./App.css"

function App() {
  const [numAdvantage, setNumAdvantage] = useState(0);
  const [hasAcademy, setHasAcademy] = useState(false);
  const [stopVexing, setStopVexing] = useState(false);

  const [untappedArts, setUntappedArts] = useState(0);
  const [tappedArts, setTappedArts] = useState(0);

  const [numClue, setNumClue] = useState(0);
  const [tappedClue, setTappedClue] = useState(0);

  const [numFood, setNumFood] = useState(0);
  const [tappedFood, setTappedFood] = useState(0);

  const [numTreasure, setNumTreasure] = useState(0);
  const [tappedTreasure, setTappedTreasure] = useState(0);

  const [numRobots, setNumRobots] = useState(0);
  const [tappedRobots, setTappedRobots] = useState(0);

  return (<>
    <div id="loopFlags">
      <div id="academyCheck" className="flag">
        <img src={Academy} className="card"></img>
        <form>
          <label htmlFor="academyCheck">Do you have academy?: </label>
          <input type="checkbox" name="academyCheck" value={hasAcademy} onChange={(e) => setHasAcademy(flag => !flag)} />
        </form>
      </div>
      <div id="vexingStop" className="flag">
        <img src={Puzzlebox} className="card"></img>
        <form>
          <label htmlFor="vexingCheck">Pause for Vexing Puzzlebox ability?: </label>
          <input type="checkbox" name="vexingCheck" value={stopVexing} onChange={(e) => setStopVexing(flag => !flag)}/>
        </form>
      </div>
      <div id="advantageRolls" className="flag">
        <img src={Wyll} className="card" />
        <Advantage numAdvantage={numAdvantage} setNumAdvantage={setNumAdvantage} />
      </div>
    </div>

  </>)
}

export default App