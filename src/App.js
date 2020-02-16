import React, { useState } from "react";
import s from "./App.module.css";

function App({ game }) {
  const [minefield, setMinefield] = useState(game.getMinefield());
  return (
    <div className={s.main}>
      {minefield.map((r, i) => (
        <div key={i}>
          {[...r].map((c, j) => {
            const handler = e => {
              e.preventDefault();
              console.log(i, j);
            };
            return (
              <button className={s.btn} key={j} onClick={handler}>
                {c}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
