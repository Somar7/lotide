const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }

};
const findKey = function(obj, callback){

  for(let key in obj) {
    if (callback(obj[key])=== true){
      return key
    }
    console.log(obj[key]);
  }
  return undefined
}
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"