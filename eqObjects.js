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
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== (Object.keys(object2).length)) {
      return false
  } else if (Object.keys(object1).length === (Object.keys(object2).length)) { 
      for (let key of Object.keys(object1)) {
          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
              if (!eqArrays(object1[key], object2[key])){
                  return false;
              }
          } else {
              if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
                  return (eqObjects(object1[key], object2[key]));
              }
          }
      }
      return true;
  }
  return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

assertEqual(eqObjects(ab, ba), true);