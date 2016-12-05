import { adjacentIndices } from './adjacentIndices';

export const neighborCount = (x, y, world) =>
    adjacentIndices(x, world)
        .map(row => adjacentIndices(y, world[x]).reduce((coords, col) => [...coords, [row, col]], []))
        .reduce((acc, x) => [...acc, ...x], [])
        .filter(([row, col]) => row !== x || col !== y)
        .reduce((count, [row, col]) => count + world[row][col], 0);
