const middle = (arr) => {

  // For arrays with 2 elements, return []
  // Arrays with odd numbers should return the middle element
  // Arrays with even numbers should return the middle two elements

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};


module.exports = middle;

