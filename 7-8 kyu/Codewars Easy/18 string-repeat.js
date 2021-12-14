/** complete
 * Write a function called repeatStr which repeats the given string string exactly n times.
 * 
 * Напишите функцию с именем repeatStr, которая повторяет заданную строку ровно n раз.
 * 
 * repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

function repeatStr(n, s) {
  let out = '';

  for (let i = 0; i < n; i++) {
    out += s;
  }

  return out;
}
;//
console.log(repeatStr(3, "*"));//, "***");
console.log(repeatStr(5, "#"));//, "#####");
console.log(repeatStr(2, "ha "));//', "ha ha ");;'