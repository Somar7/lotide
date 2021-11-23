const head = function(array) {

  return array[0]
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }

};

// TEST CODE
assertEqual(head([5,6,7]), 5); //PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //FAIL


