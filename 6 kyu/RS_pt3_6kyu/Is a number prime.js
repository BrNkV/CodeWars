/*
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
*/


const isPrime = num => {
    let s = Math.sqrt(num);
    for (let i = 2; i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}


console.log(isPrime(0));//,  false, "0 is not prime");
console.log(isPrime(1));//,  false, "1 is not prime");
console.log(isPrime(2));//,  true, "2 is prime");
console.log(isPrime(73));//, true, "73 is prime");
console.log(isPrime(75));//, false, "75 is not prime");
console.log(isPrime(-1));//, false, "-1 is not prime");


/**good
 * 
 * const isPrime = num => {
  for (let i = 2; i <= num ** .5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
}
 */