import { hasWon } from "../utils";

const isAlreadyFlagged = (payload, flags) => {
  return flags.find(coords => {
    const [px, py] = payload,
      [cx, cy] = coords;
    return px === cx && py === cy;
  });
};

const removeFlag = (payload, currentFlags) => {
  return currentFlags.filter(coords => {
    const [px, py] = payload,
      [cx, cy] = coords;
    return !(px === cx && py === cy);
  });
};

const flagReducer = (state, payload) => {
  // should probably make this more efficient
  if (isAlreadyFlagged(payload, state.flags)) {
    const flags = removeFlag(payload, state.flags);
    return {
      ...state,
      flags
    };
  }
  const flags = [...state.flags, payload].sort((a, b) => {
    return +a.join("") - +b.join("");
  });

  const status = hasWon(state.bombs, flags) ? "win" : state.status;
  return {
    ...state,
    flags,
    status
  };
};

export default flagReducer;
