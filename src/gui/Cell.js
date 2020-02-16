import React from "react";
import s from "./styles.module.css";
import classnames from "classnames";
const Cell = ({ i, j, c }) => {
  const handler = e => {
    e.preventDefault();
    // use coords to play turn
    console.log(i, j);
  };
  const className = classnames({
    [s.btn]: true,
    [s.red]: c === "b"
  });
  return (
    <button className={className} onClick={handler}>
      {c}
    </button>
  );
};

export default Cell;
