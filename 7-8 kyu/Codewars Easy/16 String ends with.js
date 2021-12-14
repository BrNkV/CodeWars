/**
 //COMPLETE
 * String ends with?
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 * 
 * Завершите решение, чтобы оно возвращало истину, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
 * 
 * solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


 */


function solution(str, ending) {
    return str.includes(ending, (str.length - ending.length));
}

console.log(solution('abcde', 'cde'));// true)
console.log(solution('abcde', 'abc'));// false)
console.log(solution('abcdefrd', 'def'));// false)
console.log(solution('abcdefrd', 'rd'));// false)