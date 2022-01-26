/**
 * Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
 */

// function getDecimal(n) {
//     let decimalPlaces = n.toString().split('.').length;
//     return +Math.abs(n - Math.trunc(n)).toFixed(decimalPlaces);
// }

function getDecimal(n) {
    let str = n.toString();


    console.log(str.split(''));
}


console.log(getDecimal(10));//, 0)
console.log(getDecimal(-1.2));//, 0.2)
console.log(getDecimal(-1.25));//, 0.2)
console.log(getDecimal(4.5));//, 0.5
console.log(getDecimal(4.523123));//, 0.5