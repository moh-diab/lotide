const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {

  const extract = Object.keys(obj);
  //console.log(extract)  

 for (let key of extract) {
  
    if (callback(obj[key]) === true) {  
      return key;
    }
  }
};

let list = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 } 
}

assertEqual(findKey(list, x => x.stars === 2), "noma");

assertEqual(findKey(list, x => x.stars === 3), "Akaleri");