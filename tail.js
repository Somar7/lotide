

const tail = function(array) {
  let tail = array.slice(1);
  return tail;

};
tail(["Hello", "Lighthouse", "Labs"]);
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, 2); // should PASS

