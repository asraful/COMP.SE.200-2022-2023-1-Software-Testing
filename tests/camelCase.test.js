const camelCase = require('../src/camelCase');


const assert = require('assert');

describe('Upper Case Test', () => {
    it('Upper Case', () => {
        const ans = camelCase('aaaa');
        assert.notEqual(ans, 'AAAA');

    });

});