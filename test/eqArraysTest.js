const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('should return true for ([1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false for ([1, 2, 3], [3, 2, 1])', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('should return true for (["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('should return false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});


/*
  const assertEqual = require('../assertEqual');
  const eqArrays = require('../eqArrays');

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
*/