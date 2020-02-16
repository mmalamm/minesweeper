import React from "react";
import ReactDOM from "react-dom";
import App from "./gui/App";

import MineSweeper from "./minesweeper";

const game = new MineSweeper();

ReactDOM.render(<App {...{ game }} />, document.getElementById("root"));
