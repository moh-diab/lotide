// FUNCTION IMPLEMENTATION
const assertEqual = function (a, b) {
  if (a === b) {
    console.log(`passed`);
  } else {
    console.log(`failed`);
  }
};

const tail = function (array) {
  array = array.slice(1);
  return array;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


