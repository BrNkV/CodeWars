/**
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

function solution(num) {
    let out = [];

    for (let i = num - 1; i >= 0; i--) {
        if (i % 3 == 0) out.push(i);
        if (i % 5 == 0) out.push(i);
    }

    return [...new Set(out)].reduce((a, b) => a + b, 0)
}

console.log(solution(10)); //23


/**good
 * 
 * function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
 */