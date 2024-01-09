import { useState } from "react";
import GamePLay  from "./components/GamePLay";
import StartGame from "./components/StartGame";
import TotalScore from "./components/TotalScore";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    {isGameStarted ? <GamePLay/> : <StartGame
    toggle={toggleGamePlay}
    />}
      
    </>
  );
}

export default App
