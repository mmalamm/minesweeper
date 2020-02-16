import React, { useState } from "react";
import s from "./styles.module.css";
import Cell from "./Cell";

function App({ game }) {
  const [minefield, setMinefield] = useState(game.getMinefield());
  return (
    <div className={s.main}>
      {minefield.map((r, i) => (
        <div key={i}>
          {r.map((c, j) => (
            <Cell key={j} {...{ i, j, c, minefield }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
