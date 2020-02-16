import React from "react";
import s from "./styles.module.css";
import classnames from "classnames";

///
import {
  getDeltaCells,
  getNumber,
  getEmptyIsland
} from "../minesweeper/store/utils";
///

const Cell = ({ i, j, c, minefield }) => {
  const handler = e => {
    e.preventDefault();
    // use coords to play turn
    const ds = getDeltaCells([i, j]);
    const num = getNumber(ds, minefield);
    if (c === "e") {
      console.log(getEmptyIsland([i, j], minefield));
    } else {
      console.log(num);
    }
  };
  const className = classnames({
    [s.btn]: true,
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
    <button className={className} onClick={handler}>
      {c}
    </button>
  );
};

export default Cell;
