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

export default clickReducer;
