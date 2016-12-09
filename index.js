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
    const { iteration, autoAdvance, interval, world } = game;
    const autoStatus = autoAdvance ? 'ON' : 'OFF';
    
    const text = [
        `Iteration ${iteration}`,
        `Auto-advance is ${autoStatus}\n`,
        displayWorld(world),
    ].join('\n');
    
    document.getElementById('board').textContent = text;
    
    if (autoAdvance) {
        advance();
    }
    
    setTimeout(() => { tick(); }, interval);
};

document.getElementById('toggle-auto-advance')
    .addEventListener('click', (e) => {
        e.preventDefault();
        console.log('TAA');
        game.autoAdvance = !game.autoAdvance;
    });

document.getElementById('next-gen')
    .addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!game.autoAdvance) {
            advance();
        }
    });

tick();