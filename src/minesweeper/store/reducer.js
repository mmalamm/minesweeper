import createInitialState from "./createInitialState";

const clickReducer = (state, payload) => {
  return 
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
