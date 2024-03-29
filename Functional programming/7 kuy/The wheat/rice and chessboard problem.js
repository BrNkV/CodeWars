/**
 * I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

As usual, a few examples might be way better than thousands of words from me:

squaresNeeded(0) === 0
squaresNeeded(1) === 1
squaresNeeded(2) === 2
squaresNeeded(3) === 2
squaresNeeded(4) === 3
Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!
 */

function squaresNeeded(grains) {
    return Math.sqrt(grains)
}

console.log(squaresNeeded(0));// 0;
console.log(squaresNeeded(1));// 1;
console.log(squaresNeeded(2));// 2;
console.log(squaresNeeded(3));// 2;
console.log(squaresNeeded(4));// 3;
console.log(squaresNeeded(5));// 3;
console.log(squaresNeeded(6));// 3;
console.log(squaresNeeded(7));// 3;
console.log(squaresNeeded(8));// 4;
console.log(squaresNeeded(9));// 4;
console.log(squaresNeeded(10));// 4;
console.log(squaresNeeded(11));// 4;
console.log(squaresNeeded(12));// 4;
console.log(squaresNeeded(13));// 4;
console.log(squaresNeeded(14));// 4;
console.log(squaresNeeded(15));// 4;
console.log(squaresNeeded(16));// 5;
console.log(squaresNeeded(17));// 5;
console.log(squaresNeeded(18));// 5;