const ADJACENT_IDX = [-1, 0, 1];

export const adjacentIndices = (idx, world) => ADJACENT_IDX
    .map(delta => idx + delta)
    .filter(newIdx => newIdx >= 0 && newIdx < world.length);
