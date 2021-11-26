const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;

  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }
  return answer;

};


const assertArraysEqual = function(actual, expected) {
  if ((!actual && !expected) || (actual && expected)) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
console.log(map);

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true); //PASS

