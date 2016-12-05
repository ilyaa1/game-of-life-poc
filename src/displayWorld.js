const worldToString = world => world.map(x => x.join(' ')).join('\n');

export const displayWorld = world => `${worldToString(world)}\n`;

export default displayWorld;
