import { createBoard } from "./utils";

const createInitialState = () => {
  return {
    inProgress: null,
    clicks: [],
    board: createBoard(),
    flags: []
  };
};

export default createInitialState;
