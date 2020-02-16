import { createSelector } from "reselect";
import { createMineField, getEmptyIsland } from "./utils";

const clicksSelector = ({ clicks }) => clicks;
const boardSelector = ({ board }) => board;

export const minefieldSelector = createSelector(
  [clicksSelector, boardSelector],
  (clicks, board) => {
    return clicks.reduce((minefield, coords) => {
      const [x, y] = coords;
      if (board[x][y] === "e") {
        getEmptyIsland([x, y], board).forEach(([cx, cy]) => {
          minefield[cx][cy] = board[x][y];
        });
      } else {
        minefield[x][y] = board[x][y];
      }
      return minefield;
    }, createMineField());
  }
);
