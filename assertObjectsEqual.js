const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0, j = 0; i < arr1.length; j++, i++) {

    if (arr1[i] === arr2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};


const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let i in obj1) {
      if ((Array.isArray(obj1[i]) && Array.isArray(obj2[i]))) {
        if (eqArrays(obj1[i], obj2[i]) === false) {
          return false
        };
      } else {
        if (obj1[i] !== obj2[i]) {
          return false;
        };
      };
    };
    return true;
  };
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
};


// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
// assertObjectsEqual(ab, cd);





// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false); // => false
// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false); // => false