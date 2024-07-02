import { useEffect, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [boostTimer, setBoostTimer] = useState(0);

  useEffect(() => {}, [boostTimer]);

  const plusOne = () => {
    setCounter(counter + multiplier);
  };

  const fireOn = () => {
    console.log("in");
    setMultiplier(multiplier * 5);
    setBoostTimer(boostTimer + 30);
    console.log("something " + boostTimer);
    for (let i = 0; i < 30; i++) {
      console.log("Start");
      setTimeout("", 1000);
      setBoostTimer(29 - i);
      console.log(boostTimer);
    }
    setMultiplier(1);
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
