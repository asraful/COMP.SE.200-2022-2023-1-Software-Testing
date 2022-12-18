const countBy = require('../src/countBy');


const assert = require('assert');

 const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
     ];
    
     
     // => { 'true': 2, 'false': 1 }
     
describe('CountyBy Test', () => {
    it('Check count', () => {

        const ans = countBy(users, value => value.active);

        assert.equal(ans.true, 1);
        assert.equal(ans.false, 0);

    });

});