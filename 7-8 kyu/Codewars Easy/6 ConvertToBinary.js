/** COMPLETE
 * 
 * Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

Обзор задачи 
Учитывая неотрицательное целое число n, напишите функцию to_binary / ToBinary, которая возвращает это число в двоичном формате.

to_binary(1)  should return 1 
to_binary(5)  should return 101 
to_binary(11) should return 1011


Десятичное число (положительное)	Двоичное число
0	0
1	1
2	10
3	11
4	100
5	101
6	110
7	111
8	1000
9	1001
10	1010
11	1011
12	1100
13	1101
14	1110
15	1111
16	10000
32	100000
64	1000000
128	10000000
256	100000000

 */

//varian 1
function toBinary(n) {
    return (n >>> 0).toString(2);
}

//varian 2
function toBinary(n) {
    return n.toString(2);
}



console.log(toBinary(1)) //1);
console.log(toBinary(2)) //10);
console.log(toBinary(3)) //11);
console.log(toBinary(5)) //101);