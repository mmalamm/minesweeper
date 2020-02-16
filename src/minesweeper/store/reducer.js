import createInitialState from "./createInitialState";

const clickReducer = (state, payload) => {
  const [x, y] = payload;
  const clicks = [...state.clicks, payload];
  if (state.board[x][y] === "b") {
    return {
      ...state,
      clicks,
      inProgress: false
    };
  }
  return {
    ...state,
    clicks
  };
};
const flagReducer = (state, payload) => {
  const flags = [...state.flags, payload];
  return {
    ...state,
    flags
  };
};

const initialState = createInitialState();
// {
//   inProgress: null,
//   clicks: [],
//   board: createBoard(),
//   flags: []
// }

const reducers = {
  CLICK: clickReducer,
  FLAG: flagReducer
};

export default function minesweeperReducer(state = initialState, action) {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state;
}
