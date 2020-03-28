/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {

let currentSum = 0;

    for (let j = 0; j<= array.length - 1; j++){
      currentSum += array[j];
    }

return currentSum;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
console.log (' 2 , 3 , 4 , 5:', sum([2 , 3 , 4 , 5 ]));
console.log (' 4 , 5 , 1 , 10:', sum([4 , 5 , 1 , 10]));
console.log (' 3 , 7 , 3 , 2 , 1 :', sum([3 , 7 , 3 , 2 , 1]));
console.log (' 12 , 32 , 14 , 455, 123, 345:( should be 981)', sum([12 , 32 , 14 , 455, 123, 345]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
