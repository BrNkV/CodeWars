/**complete
 * Even or Odd
 * add
 * 
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 * 
 * 
 */

function even_or_odd(number) {
    if (number % 2 == 0) return "Even";
    else return "Odd";
}

console.log(even_or_odd(2));// "Even"
console.log(even_or_odd(7)); //"Odd"
console.log(even_or_odd(-42));// "Even"
console.log(even_or_odd(-7)); //"Odd"
console.log(even_or_odd(0)); //"Even"
