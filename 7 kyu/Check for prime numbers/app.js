/**
 * In this kata you will create a function to check a non-negative input to see if it is a prime number.

The function will take in a number and will return True if it is a prime number and False if it is not.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Examples(input --> output)

0 --> false
1 --> false
2 --> true
11 --> true
12 --> false

 */


/* 1st variant = ((

Test Results:
Check for prime numbers
Fixed tests
expected false to equal true
Completed in 2ms
Completed in 2ms

// function isPrime(num) {
//     let flag = false;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//         else{
//             flag = true;
//         }
//     }
//     return flag;
// }
*/

/* 2 variant complete*/
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(isPrime(1)) //false
console.log(isPrime(11)) //true
console.log(isPrime(12)) //false
console.log(isPrime(61)) //true
console.log(isPrime(571)) //true
console.log(isPrime(573)) //false
console.log(isPrime(25)) //false


/**
 * variants
 *
 * 1
 const isPrime = (n, divisor = 2) =>
  n < 2
    ? false
    : divisor === n
    ? true
    : n % divisor === 0
    ? false
    : isPrime(n, divisor + 1);

 * 2
    const isPrime = length => length > 1
  ? Array
    .from({ length }, (_,i) => length % ++i === 0)
    .filter(Boolean).length === 2
  : false

  *3
const isPrime = n => (n = Math.abs(n)) > 1 &&
  [...Array(n).keys()].reduce((r, e) =>
    e < 2 ? true : (n % e) ? r : false, true);

 */