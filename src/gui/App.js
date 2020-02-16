import React, { useState, useEffect } from "react";
import s from "./styles.module.css";
import Cell from "./Cell";

function App({ game }) {
  const [minefield, setMinefield] = useState(game.getMinefield());
  useEffect(() => {
    game.subscribe(() => {
      const status = game.getStatus();
      if (status === "win") alert("win !");
      if (status === "lose") alert("lose !");

      setMinefield(game.getMinefield());
    });
  }, [game]);
  return (
    <>
      <div className={s.main}>
        <code className={s.directions}>
          flag (right-click) all the bombs to win
        </code>
        {minefield.map((r, i) => (
          <div key={i}>
            {r.map((c, j) => (
              <Cell
                key={j}
                {...{
                  i,
                  j,
                  c,
                  clickCell: game.clickCell,
                  flagCell: game.flagCell
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
