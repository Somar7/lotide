const head = function(array) {

  return array[0]
};

const assertEqual = require('./assertEqual');

// TEST CODE
assertEqual(head([5,6,7]), 5); //PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helloo"); //FAIL


module.exports = head;