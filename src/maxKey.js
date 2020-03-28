/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let currentLargestValue = 0;

  let values = Object.values(obj);

  for (let j = 0; j <= values.length - 1; j++){
    if (values[j] > currentLargestValue){
      currentLargestValue = values[j];
    }
  }
  return currentLargestValue;
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
console.log('among 10 , 20 , 13 greater is:', maxKey({a : 10 , b: 20, c: 13}));
console.log('among 0 , 2 , 4 , 12 greater is:', maxKey({a : 0 , b: 2, c: 4, d: 12}));
console.log('among 100, 20 , 135, 1, 15487 greater is:', maxKey({a : 100 , b: 20, c: 135 , d: 15487}))
console.log('among 54, 27 , 31 , 12 , 45, 32 greater is:', maxKey({a : 54 , b: 27, c: 31 , d: 12 , e: 45 , f: 32 }))


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
