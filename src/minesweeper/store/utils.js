const createEmptyBoard = () => [...Array(10)].map(_ => "e".repeat(10));

const get10 = () => {
  const output = [];
  while (output.length < 10) {
    const random = Math.floor(Math.random() * 100);
    if (output.includes(random)) continue;
    output.push(random);
  }
  return output
    .sort((a, b) => a - b)
    .map(n => {
      const s = "" + n;
      if (s.length === 1) return [0, n];
      return [+s[0], +s[1]];
    });
};

const placeBombs = (bombCoords, board) => {
  return bombCoords.reduce((acc, coords) => {
    const rowIdx = coords[0],
      colIdx = coords[1];
    const oldRow = [...acc[rowIdx]];
    oldRow[colIdx] = "b";
    const newRow = oldRow.join("");
    acc[rowIdx] = newRow;
    return acc;
  }, board);
};

export const createBoard = () => {
  const rands = get10();

  return placeBombs(rands, createEmptyBoard());
};
