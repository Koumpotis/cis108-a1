/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let currentMax = array[0]
  for (let j = 1; j <= array.length; j++){
    if (currentMax < array[j]){
      currentMax = array[j];
    }
  }
  return currentMax;

  // This is your job. :)
  // Don't use the built-in Math.max
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
console.log (' 2 , 3 , 4 , 5:', max([2 , 3 , 4 , 5 ]));
console.log (' 4 , 5 , 7 , 12:', max([4 , 5 , 7 , 12]));
console.log (' 34 , 73 , 67 , 34:', max([34 , 73 , 67 , 12 , 34]));
console.log (' 12 , 32 , 14 , 455, 123, 345:', max([12 , 32 , 14 , 455, 123, 345]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
