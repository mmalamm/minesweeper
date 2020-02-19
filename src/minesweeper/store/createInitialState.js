import { get10 } from "./utils";

const createInitialState = () => {
  const bombs = get10();
  return {
    status: 'started',
    bombs,
    clicks: [],
    flags: []
  };
};

export default createInitialState;
