import { useEffect, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [boostTimer, setBoostTimer] = useState(0);

  useEffect(() => {
    console.log(boostTimer);
    boostTimer > 0 && setTimeout(() => setBoostTimer(boostTimer - 1), 1000);
  }, [boostTimer]);

  const plusOne = () => {
    setCounter(counter + multiplier);
  };

  const fireOn = () => {
    setBoostTimer(30);
    setMultiplier(5);
  };

  return (
    <div className="container">
      <div className="score">Score: {counter}</div>
      <button className="score-button" onClick={plusOne}>
        Click me!
      </button>
      <button className="boost-button" onClick={fireOn}>
        &#128293;
      </button>
      <div className="boost-timer">{boostTimer}</div>
    </div>
  );
}

export default MainPage;
