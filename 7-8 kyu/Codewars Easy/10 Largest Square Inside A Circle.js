/**comlete
//ADD 
Determine the area of the largest square that can fit inside a circle with radius r.

Определите площадь самого большого квадрата, который может поместиться внутри круга радиуса r.


*/

function areaLargestSquare(r) {
  let d = r * 2;
  return (d * d) / 2;
}

console.log(areaLargestSquare(5))// 50);
console.log(areaLargestSquare(7));// 98);
console.log(areaLargestSquare(15));// 450);