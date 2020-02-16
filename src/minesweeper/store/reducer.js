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

const initialState = createInitialState();
// {
//   inProgress: null,
//   clicks: [],
//   board: createBoard()
// }

const reducers = {
  CLICK: clickReducer
};

export default function minesweeperReducer(state = initialState, action) {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state;
}
