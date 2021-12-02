const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
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

const letterPositions = function (sentence) {

  let results = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      results[letter] = [];
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
          results[letter].push(i);
        };
      };
    };
  };
  return results;
};


assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

console.log(letterPositions("LHL"));
