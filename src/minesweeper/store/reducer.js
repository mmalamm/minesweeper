import createInitialState from "./createInitialState";

const clickReducer = (state, payload) => {
  return [...state, payload];
};

const initialState = createInitialState();

const reducers = {
  CLICK: clickReducer
};

export default function minesweeperReducer(state = initialState, action) {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state;
}
