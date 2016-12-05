import { adjacentIndices } from './adjacentIndices';
import chai from 'chai';

chai.should();

describe('adjacentIndices', () => {
    const array = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    
    const array1x1 = [
        [0]
    ];
    
    const emptyArray = [];
    
    it('should handle (0, 0) case correctly', () => {
        const cols = adjacentIndices(0, array);
        
        cols.should.be.not.empty;
        cols.should.have.lengthOf(2);
        cols.should.eql([0, 1]);
        
        const rows = adjacentIndices(0, array[0]);
    
        rows.should.be.not.empty;
        rows.should.have.lengthOf(2);
        rows.should.eql([0, 1]);
    });
    
    it('should handle non-edge cell correctly', () => {
        const cols = adjacentIndices(3, array);
    
        cols.should.be.not.empty;
        cols.should.have.lengthOf(3);
        cols.should.eql([2, 3, 4]);
    
        const rows = adjacentIndices(2, array[3]);
    
        rows.should.be.not.empty;
        rows.should.have.lengthOf(3);
        rows.should.eql([1, 2, 3]);
    });
    
    it('should handle a top-edge cell (0, y) correctly', () => {
        const cols = adjacentIndices(0, array);
    
        cols.should.be.not.empty;
        cols.should.have.lengthOf(2);
        cols.should.eql([0, 1]);
    
        const rows = adjacentIndices(2, array[0]);
    
        rows.should.be.not.empty;
        rows.should.have.lengthOf(3);
        rows.should.eql([1, 2, 3]);
    });
    
    it('should handle a bottom-edge cell ([cols-1], y) correctly', () => {
        const cols = adjacentIndices(array.length - 1, array);
    
        cols.should.be.not.empty;
        cols.should.have.lengthOf(2);
        cols.should.eql([array.length - 2, array.length - 1]);
    
        const rows = adjacentIndices(2, array[array.length - 1]);
    
        rows.should.be.not.empty;
        rows.should.have.lengthOf(3);
        rows.should.eql([1, 2, 3]);
    });
    
    it('should handle a left-edge cell (x, 0) correctly');
    
    it('should handle a right-edge cell (x, []) correctly');
    
    it('should return a array with specified index for a 1x1 input array', () => {
        const cols = adjacentIndices(0, array1x1);
    
        cols.should.be.not.empty;
        cols.should.have.lengthOf(1);
        cols.should.eql([0]);
        
        const rows = adjacentIndices(0, array1x1[0]);
    
        rows.should.be.not.empty;
        rows.should.have.lengthOf(1);
        rows.should.eql([0]);
    });
    
    it('should return an empty list for an empty array', () => {
        const cols = adjacentIndices(1, emptyArray);
        
        cols.should.be.empty;
    });
});
