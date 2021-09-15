// Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.

Всегда будет только одно целое число, которое встречается нечетное количество раз.

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});
 */

// мое решение 0.169 seconds
function findOdd(arr) {
  //happy coding!
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      console.log(arr[i]);
      return arr[i];
    }
  };
}


let arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
let arr1 = [1,1,2,-2,5,2,4,4,-1,-2,5];
let arr2 =[20,1,1,2,2,3,3,5,5,4,20,4,5];
let arr3 = [10];
let arr4 = [1,1,1,1,1,1,10,1,1,1,1];
let arr5 = [5,4,3,2,1,5,4,3,2,10,10];

// console.log(findOdd(arr));
// console.log(findOdd(arr1));
// console.log(findOdd(arr2));
// console.log(findOdd(arr3));

findOdd(arr);
findOdd(arr1);
findOdd(arr2);
findOdd(arr3);
findOdd(arr4);
findOdd(arr5);

// решения которые понравились:

/*1
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/

/*2
function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}
*/

/*3
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
*/
