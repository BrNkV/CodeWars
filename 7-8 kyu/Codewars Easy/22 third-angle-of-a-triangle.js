/**complete 
 * add
 * 
 * You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

Вам даны два внутренних угла (в градусах) треугольника. 
Напишите функцию для возврата 3-го числа. 
Примечание: будут проверяться только положительные целые числа.

Сумма всех трёх углов треугольника равна сумме углов ABD и BAC. Так как эти углы внутренние односторонние для параллельных AC и BD при секущей AB, то их сумма равна 180°

 */

let otherAngle = (a, b) => 180 - (a + b);

console.log(otherAngle(30, 60));//, 90);
console.log(otherAngle(60, 60));//, 60);
console.log(otherAngle(43, 78));//, 59);
console.log(otherAngle(10, 20));//, 150);