import { useState } from "react";
import HouseImage from "./assets/House.jpg";
import RobotImage from "./assets/Robot.webp";
import PuzzleboxImage from "./assets/Puzzlebox.webp";
import TreasureImage from "./assets/Treasure.jpg";
import FoodImage from "./assets/Food.jpg";
import AcademyImage from "./assets/Academy.jpg";
import WyllImage from "./assets/Wyll.webp";
import ClueImage from "./assets/Clue.webp";

import Advantage from "./components/advantage";
import ArtCounter from "./components/artCounter";
import "./App.css";

function App() {
  const [numAdvantage, setNumAdvantage] = useState(0);
  const [hasAcademy, setHasAcademy] = useState(false);
  const [stopVexing, setStopVexing] = useState(false);
  const [numLoops, setNumLoops] = useState(0);
  const [numPuzzleCounter, setNumPuzzleCounter] = useState(0);

  const [numClue, setNumClue] = useState(0);
  const [tappedClue, setTappedClue] = useState(0);

  const [numFood, setNumFood] = useState(0);
  const [tappedFood, setTappedFood] = useState(0);

  const [numTreasure, setNumTreasure] = useState(0);
  const [tappedTreasure, setTappedTreasure] = useState(0);

  const [numRobots, setNumRobots] = useState(0);
  const [tappedRobots, setTappedRobots] = useState(0);

  function houseLoop() {
    let loops = 0;
    let puzzleCounters = numPuzzleCounter;
    let untappedArts = numClue + numFood + numRobots + numTreasure;

    let clues = numClue;
    let tapped_clues = tappedClue;

    let foods = numFood;
    let tapped_foods = tappedFood;

    let treasures = numTreasure;
    let tapped_treasures = tappedTreasure;

    let robots = numRobots;
    let tapped_robots = tappedRobots;

    if (untappedArts < 2) {
      console.log(`preventing loop: ${untappedArts} artifacts untapped`);
      return;
    }

    while (untappedArts >= 2 && loops < 500) {
      let tapped = 0;
      while (tapped < 2) {
        if (clues > 0) {
          clues -= 1;
          tapped_clues += 1;
        } else if (foods > 0) {
          foods -= 1;
          tapped_foods += 1;
        } else if (treasures > 0) {
          treasures -= 1;
          tapped_treasures += 1;
        } else {
          robots -= 1;
          tapped_robots += 1;
        }
        tapped += 1;
        untappedArts -= 1;
      }

      let rolls = 1 + numAdvantage;
      let highest = 0;
      while (rolls > 0) {
        let roll = Math.floor(Math.random() * 20) + 1;
        highest = Math.max(highest, roll);
        rolls -= 1;
      }

      if (highest >= 4) {
        robots += 1;
        untappedArts += 1;
      }
      if (highest >= 6) {
        if (hasAcademy) {
          clues += 1;
          foods += 1;
          treasures += 1;
          untappedArts += 3;
        } else {
          treasures += 1;
          untappedArts += 1;
        }
      }

      loops += 1;
      puzzleCounters += highest;

      if (stopVexing && puzzleCounters >= 100) break;
    }
    
    setNumLoops(loops);
    setNumPuzzleCounter(puzzleCounters);

    setNumClue(clues);
    setTappedClue(tapped_clues);

    setNumFood(foods);
    setTappedFood(tapped_foods);

    setNumTreasure(treasures);
    setTappedTreasure(tapped_treasures);

    setNumRobots(robots);
    setTappedRobots(tapped_robots);
  }

  return (
    <>
      <div id="loopFlags">
        <div id="academyFlag" className="flag">
          <img src={AcademyImage} className="card"></img>
          <form>
            <label htmlFor="academyCheck">Do you have academy?: </label>
            <input
              type="checkbox"
              name="academyCheck"
              id="academyCheck"
              checked={hasAcademy}
              onChange={(e) => setHasAcademy(e.target.checked)}
            />
          </form>
        </div>
        <div id="vexingFlag" className="flag">
          <img src={PuzzleboxImage} className="card"></img>
          <form>
            <label htmlFor="vexingCount">Number of counters: </label>
            <input id="vexingCount" type="number" value={numPuzzleCounter} onChange={(e) => setNumPuzzleCounter(Number(e.target.value))} min={0} style={{width: "50px"}}/>
          </form>
          <form>
            <label htmlFor="vexingCheck">
              Pause for Vexing Puzzlebox ability?:{" "}
            </label>
            <input
              type="checkbox"
              name="vexingCheck"
              id="vexingCheck"
              checked={stopVexing}
              onChange={(e) => setStopVexing(e.target.checked)}
            />
          </form>
        </div>
        <div id="advantageRolls" className="flag">
          <img src={WyllImage} className="card" />
          <Advantage
            numAdvantage={numAdvantage}
            setNumAdvantage={setNumAdvantage}
          />
        </div>
      </div>

      <div id="mainLoop">
        <div className="layer">
          <ArtCounter
            tokenName="clue"
            ArtImage={ClueImage}
            artUntapped={numClue}
            setArtUntapped={setNumClue}
            artTapped={tappedClue}
            setArtTapped={setTappedClue}
          />
          <div id="House">
            <div style={{ position: "relative" }}>
              <img
                src={HouseImage}
                className="card"
                style={{ display: "block" }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "100px",
                  color: "white",
                  "-webkit-text-stroke": "2px black",
                }}
              >
                {numLoops}
              </p>
              <button onClick={houseLoop}>Time to Duel</button>
            </div>
          </div>
          <ArtCounter
            tokenName="robot"
            ArtImage={RobotImage}
            artUntapped={numRobots}
            setArtUntapped={setNumRobots}
            artTapped={tappedRobots}
            setArtTapped={setTappedRobots}
          />
        </div>
        <div className="layer" style={{gap: "360px"}}>
          <ArtCounter
            tokenName="food"
            ArtImage={FoodImage}
            artUntapped={numFood}
            setArtUntapped={setNumFood}
            artTapped={tappedFood}
            setArtTapped={setTappedFood}
          />
          <ArtCounter
            tokenName={"treasure"}
            ArtImage={TreasureImage}
            artUntapped={numTreasure}
            setArtUntapped={setNumTreasure}
            artTapped={tappedTreasure}
            setArtTapped={setTappedTreasure}
          />
        </div>
      </div>
    </>
  );
}

export default App;
