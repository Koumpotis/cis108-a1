/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function smallestPrimeFactor(num) {
  let prime_factors = findPrimeFactors(num);

  return prime_factors[0];
  // This is your job. :)
}

function findPrimeFactors(num){
  let prime_factors  = [];

  for (let a = 2; a < num; a++){
    if (num % a === 0) {
      let count=0;

      for (let b = 2; b <= a; b++){

        if (a % b === 0 ){
          count += 1;
        }
      }

      if (count < 2) {
        prime_factors.push(a);
      }
    }
  }
  return prime_factors;
}



if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
console.log('The smallest prime factor of 917329 is: (should be 7)' , smallestPrimeFactor(917329));
console.log('The smallest prime factor of 12 is: (should be 2)' , smallestPrimeFactor(12));
console.log('The smallest prime factor of 77 is: (should be 7)' , smallestPrimeFactor(77));
console.log('The smallest prime factor of 35 is: (should be 5)' , smallestPrimeFactor(35));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactor;
