import React from "react";
import s from "./styles.module.css";
import classnames from "classnames";

const Cell = ({ i, j, c, clickCell, flagCell }) => {
  const handler = e => {
    e.preventDefault();
    clickCell([i, j]);
  };
  const rightClickHandler = e => {
    e.preventDefault();
    flagCell([i, j]);
  };
  const className = classnames({
    [s.btn]: true,
    [s.unclicked]: c === "u",
    [s.bomb]: c === "b",
    [s.emptyCell]: c === "e",
    [s.blue]: c === 1,
    [s.green]: c === 2,
    [s.red]: c === 3,
    [s.purple]: c === 4,
    [s.maroon]: c === 5,
    [s.turquoise]: c === 6,
    [s.black]: c === 7,
    [s.gray]: c === 8
  });
  return (
    <button
      className={className}
      onClick={handler}
      disabled={c !== "u"}
      onContextMenu={rightClickHandler}
    >
      {c}
    </button>
  );
};

export default Cell;
