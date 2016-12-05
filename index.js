const { updateWorld } = require('./src/updateWorld');
const { displayWorld } = require('./src/displayWorld');

const game = {
    interval: 500,
    autoAdvance: false,
    iteration: 0,
    world: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    ]
};

const advance = () => {
    game.world = updateWorld(game.world);
    game.iteration += 1;
};

const tick = () => {
    let text = `Iteration ${game.iteration}\nAuto-advance is ${game.autoAdvance ? 'ON' : 'OFF'}\n\n`;
    
    text += displayWorld(game.world);
    
    document.getElementById('board').textContent = text;
    
    if (game.autoAdvance) {
        advance();
    }
    
    setTimeout(() => tick(), game.interval);
};

document.getElementById('toggle-auto-advance').addEventListener('click', () => {
    game.autoAdvance = !game.autoAdvance;
});

document.getElementById('next-gen').addEventListener('click', () => {
    if (!game.autoAdvance) {
        advance();
    }
});

tick();

console.log('hello');
