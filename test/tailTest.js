const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


