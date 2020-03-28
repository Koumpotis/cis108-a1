let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  let currentSum = sum(array);
  let currentAvg= currentSum / array.length;
  return currentAvg;
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log (' 2 , 4 , 6 , 8: (should be 5)', avg([2 , 4 , 6 , 8 ]));
  console.log (' 4 , 6 , 8 , 12 , 17, 22: (should be 11)', avg([4 , 7 , 5 , 11 , 15 , 24]));
  console.log (' 3 , 9 , 12 , 15 , 21: (should be 12)', avg([3 , 9 , 12 , 15 , 21]));
  console.log (' 12 , 32 , 14 , 455, 123, 345: (should be 142)', avg([12 , 32 , 14 , 455, 123, 345 , 13]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
