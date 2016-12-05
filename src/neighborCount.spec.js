import { neighborCount } from './neighborCount';
import chai from 'chai';

chai.should();

describe('neighborCount', () => {
    const world = [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    ];
    
    const cols = world.length;
    const rows = world[0].length;
    
    it('should correctly handle (0, 0) cell', () => {
        const count = neighborCount(0, 0, world);
        
        count.should.equal(0);
    });
    
    it('should correctly handle (0, [rows - 1]) cell', () => {
        const count = neighborCount(0, rows - 1, world);
        
        count.should.equal(3);
    });
    
    it('should correctly handle ([cols-1], 0) cell', () => {
        const count = neighborCount(cols - 1, 0, world);
        
        count.should.equal(2);
    });
    
    it('should correctly handle ([cols-1], [rows-1]) cell', () => {
        const count = neighborCount(cols - 1, rows - 1, world);
        
        count.should.equal(0);
    });
});
