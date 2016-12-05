import { neighborCount } from './neighborCount';
import { isAlive  } from './isAlive';

export const updateWorld = world =>
    world.map((row, x) =>
        row.map((cell, y) =>
            isAlive(cell, neighborCount(x, y, world)) ? 1 : 0));
