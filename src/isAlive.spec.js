import { isAlive } from './isAlive';
import chai from 'chai';

chai.should();

describe('isAlive', () => {
    it('should kill a live cell with less than two neighbors', () => {
        const nextGen = isAlive(1, 1);
        
        nextGen.should.be.false;
    });
    
    it('should keep the cell with 2 or 3 neighbors alive', () => {
        const nextGen = isAlive(1, 3);
        
        nextGen.should.be.true;
    });
    
    it('should kill a live cell with more than 3 neighbors', () => {
        const nextGen = isAlive(1, 4);
        
        nextGen.should.be.false;
    });
    
    it('should keep a dead cell dead when less than 3 neighbors', () => {
        const nextGen = isAlive(0, 2);
    
        nextGen.should.be.false;
    });
    
    it('should make a dead cell alive with exactly three neighbors', () => {
        const nextGen = isAlive(0, 3);
    
        nextGen.should.be.true;
    });
    
    it('should keep a dead cell dead when more than 3 neighbors', () => {
        const nextGen = isAlive(0, 4);
    
        nextGen.should.be.false;
    });
});
