/** complete
 * 
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 * 
 * Это ката умножает заданное число на восемь, если это четное число, и на девять в противном случае.
 * 
 * 
 */

 function simpleMultiplication(number) {
    let out;
    
    if (number % 2 == 0) out = number*8;
    else out = number*9;
    
    return out;
}


console.log(simpleMultiplication(2));//,16,'Should return double given argument..')
console.log(simpleMultiplication(1));//,9,'Should return double given argument..')
console.log(simpleMultiplication(8));//,64,'Should return given argument times eight...')
console.log(simpleMultiplication(4));//,32,'Should return given argument times eight...')
console.log(simpleMultiplication(5));//,45,'Should return given argument times nine...')