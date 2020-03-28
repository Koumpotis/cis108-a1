/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
let obj = {};
let word_count = 0;

  for (let j = 0; j <= array.length - 1; j++){

    for (let i = 0; i <= array.length - 1; i++){

      let itemOne = array[j];
      let itemTwo = array[i];

      if (itemOne === itemTwo){
        word_count += 1;

      }
    }

    obj[`${array[j]}`] = word_count;
    word_count = 0;
  }
return obj;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log(countItems(['apple', 'goat', 'apple', 'potato']));
  console.log(countItems(['apple', 'goat', 'apple', 'potato', 'tomato', 'potato']));
  console.log(countItems(['apple', 'goat', 'apple', 'potato', 'mail', 'school', 'school']));
  console.log(countItems(['apple', 'apple', 'apple', 'potato', 'potato', 'goat', 'potato', 'goat']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
