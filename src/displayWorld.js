const worldToString = world => world.map(x => x.map(cell => cell === 1 ? 'x' : '·').join(' ')).join('\n');

export const displayWorld = world => `${worldToString(world)}\n`;

export default displayWorld;
