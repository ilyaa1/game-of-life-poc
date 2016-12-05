export const isAlive = (cell, liveNeighbourCount) =>
    (cell === 1 && (liveNeighbourCount === 2 || liveNeighbourCount === 3)) ||
    (cell === 0 && liveNeighbourCount === 3);