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
  const flags = [...state.flags, payload];
  return {
    ...state,
    flags
  };
};

export default flagReducer;
