import { createBoard, get10 } from "./utils";

const createInitialState = () => {
  const bombs = get10();
  return {
    status: 'started',
    clicks: [],
    bombs,
    board: createBoard(bombs),
    flags: []
  };
};

export default createInitialState;
