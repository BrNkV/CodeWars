/**
 * For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} 
 */

function add(addendA, addendB)  {
    let sum = 0, cursor = 1;
    while (addendA || addendB) {
      const digitSum = (addendA % 10) + (addendB % 10);
      sum += cursor * digitSum;
      cursor *= digitSum < 10 ? 10 : 100;
      addendA = Math.floor(addendA / 10);
      addendB = Math.floor(addendB / 10);
    }
    return sum;
  }



console.log(add(2, 11));//, 13);
// console.log(add(0, 1));//, 1);
// console.log(add(0, 0));//, 0);
// console.log(add(16, 18));//, 214);
// console.log(add(26, 39));//, 515);
// console.log(add(122, 81));//, 1103);
// console.log(add(1222, 30277));//, 31499);
// console.log(add(1236, 30977));//, 31111013);
// console.log(add(38810, 1383));//, 391193);
// console.log(add(49999, 49999));//, 818181818);

/**good
 * 
 function add(a,b) {
    let s = ""
    
    while(a+b) {
        s = a%10 + b%10 + s
        a = a/10|0
        b = b/10|0
    }
    
    return +s
}
 */