/**complete
 * add
 * Perimeter sequence
 * The first three stages of a sequence are shown.
 * The blocksize is a by a and a ≥ 1.
 * What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
 * 
 * Последовательность периметра
 * Показаны первые три этапа последовательности.
 * Размер блока равен a на a и a ≥ 1.
 * Каков периметр n-й фигуры в последовательности (n ≥ 1)?
 */

function perimeterSequence(a, n) {
  return p = 2 * (a + a) * n;
}
console.log(perimeterSequence(1, 3))//, 12)
console.log(perimeterSequence(1, 2))//, 8)
console.log(perimeterSequence(1, 4))//, 8)