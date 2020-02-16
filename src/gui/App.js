import React, { useState, useEffect } from "react";
import s from "./styles.module.css";
import Cell from "./Cell";

function App({ game }) {
  const [minefield, setMinefield] = useState(game.getMinefield());
  useEffect(() => {
    game.subscribe(() => {
      console.log(game.getState());
      setMinefield(game.getMinefield());
    });
  }, [game]);
  return (
    <>
      <div className={s.main}>
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
      <div>
        {game.getState().board.map((r, i) => (
          <div key={i}>
            {r.map((c, j) => (
              <Cell key={j} {...{ i, j, c, clickCell: game.clickCell }} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
