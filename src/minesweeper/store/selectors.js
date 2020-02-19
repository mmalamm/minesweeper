import { createSelector } from "reselect";
import { createMineField, getEmptyIsland, createBoard } from "./utils";

const clicksSelector = ({ clicks }) => clicks;
const flagsSelector = ({ flags }) => flags;

export const boardSelector = ({ bombs }) => createBoard(bombs);

// should memoize for better performance
export const minefieldSelector = createSelector(
  [clicksSelector, boardSelector, flagsSelector],
  (clicks, board, flags) => {
    const uBoard = clicks.reduce((minefield, coords) => {
      const [x, y] = coords;
      if (board[x][y] === "e") {
        getEmptyIsland([x, y], board).forEach(([cx, cy]) => {
          minefield[cx][cy] = board[cx][cy];
        });
      } else {
        minefield[x][y] = board[x][y];
      }
      return minefield;
    }, createMineField());
    return flags.reduce((field, coords) => {
      const [x, y] = coords;
      field[x][y] = "f";
      return field;
    }, uBoard);
  }
);
