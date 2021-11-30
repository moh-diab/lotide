const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const middle = (arr) => {

  let resultArr = [];
  const lengthOfArr = arr.length;
  const midPos = Math.ceil((lengthOfArr) / 2 - 1);
  const midPos2 = Math.floor((lengthOfArr) / 2 + 1);

  // For arrays with 2 elements, return []
  // Arrays with odd numbers should return the middle element
  // Arrays with even numbers should return the middle two elements

  if (arr.length > 2) {
    for (let index = midPos; index < midPos2; index++) {
      resultArr.push(arr[index]);
    }
  }

  return resultArr;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]