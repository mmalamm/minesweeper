import { createBoard } from "./utils";

const createInitialState = () => {
  return {
    clicks: [],
    board: createBoard()
  };
};

export default createInitialState;
