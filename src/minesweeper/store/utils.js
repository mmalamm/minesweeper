const createEmptyBoard = () =>
  [...Array(10)].map(_ => [...Array(10)].map(_ => "e"));

export const createMineField = () =>
  [...Array(10)].map(_ => [...Array(10)].map(_ => "u"));

export const get10 = () => {
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

export const hasWon = (a, b) => {
  if (b.length !== 10) return false;
  return !!a.filter((e, i) => e.join("") === b[i].join("")).length;
};

const placeBombs = (bombCoords, board) => {
  return bombCoords.reduce((acc, coords) => {
    const [rowIdx, colIdx] = coords;
    acc[rowIdx][colIdx] = "b";
    return acc;
  }, board);
};

const deltas = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

const openSquares = (currentCoords, bombBoard, island) => {
  const str = currentCoords.join("");
  if (island.includes(str)) return;
  const [x, y] = currentCoords;
  if (bombBoard[x][y] === "e") {
    island.push(str);
    getDeltaCells(currentCoords).forEach(d => {
      openSquares(d, bombBoard, island);
    });
  } else {
    island.push(str);
    return;
  }
};
export const getEmptyIsland = (emptyCoords, bombBoard) => {
  const output = [];
  openSquares(emptyCoords, bombBoard, output);
  return output.map(([x, y]) => [+x, +y]);
};

const isValid = n => n >= 0 && n < 10;
const bothValid = (a, b) => isValid(a) && isValid(b);

export const getDeltaCells = ([x, y]) => {
  return deltas.reduce((acc, [dx, dy]) => {
    const px = dx + x,
      py = dy + y;
    return bothValid(px, py) ? [...acc, [px, py]] : acc;
  }, []);
};

export const getNumber = (deltas, bombBoard) =>
  deltas.filter(([x, y]) => bombBoard[x][y] === "b").length;

const numberCells = bombBoard => {
  return bombBoard.map((row, x) => {
    return row.map((cell, y) => {
      if (cell === "b") return cell;
      const deltas = getDeltaCells([x, y]);
      const num = getNumber(deltas, bombBoard);
      if (num === 0) return "e";
      return num;
    });
  });
};

export const createBoard = bombCoordinates => {
  return numberCells(placeBombs(bombCoordinates, createEmptyBoard()));
};
