import createInitialState from "../createInitialState";
import clickReducer from "./clickReducer";
import flagReducer from "./flagReducer";

const initialState = createInitialState();
// {
//   status: 'in_progress'|'win'|'lose' ,
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
