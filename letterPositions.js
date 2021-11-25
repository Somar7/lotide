// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`These two are the same: ${actual} vs ${expected}`)
  } else {
      console.log(`These two are not the same: ${actual} vs ${expected}`);
  }

};

const eqArrays = function(a1, a2)
{
  if(a1.length === a2.length)
  {
      for (var i = 0; i < a1.length; i ++)
      {
          if(a1[i] !== a2[i])
          {
              return false;
          }
      }
  }
  else
  {
      return false;
  }
  return true;


}
const assertArraysEqual = function(a1, a2)
{
  if(a1.length === a2.length)
  {
      for (var i = 0; i < a1.length; i ++)
      {
          if(a1[i] !== a2[i])
          {
              console.log("Not the same")
              return false;
          }
      }
  }
  else
  {
      console.log("Not the same because not the same length")
      return false;
  }
  console.log("The same")
  return true;


}

const letterPosition = function(sentence){
  const countNum = {};
  for (i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (countNum[letter]) {
          countNum[letter].push(i);
      } else {
          countNum[letter] = [i];
      }
  }
  
  
  console.log(countNum)
  return countNum;
}

// console.log(letterPosition("lighthouse in the house"))



// TEST CODE
assertArraysEqual(letterPosition("hello").e, [1]);