/**
 * Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
 */

function isPowerOfTwo(x) {
    return ((x != 0) && !(x & (x - 1)));
}

console.log(isPowerOfTwo(2)); //, true)
console.log(isPowerOfTwo(4096)); //, true)
console.log(isPowerOfTwo(5)); //, false)
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));

/**good
 * 
 * Используя побитовые операторы, это лучший способ с точки зрения эффективности и чистоты вашего кода:

function isPowerOfTwo(x){
    return ((x != 0) && !(x & (x - 1)));
}
Он проверяет биты, составляющие число, т. е. 8 выглядит так:

1 0 0 0
x-1 или 7 в этом случае выглядит следующим образом

0 1 1 1
Когда используется побитовый оператор &, он вызывает && для каждого бита числа (таким образом, 1 & 1 = 1, 1 & 0 = 0, 0 & 1 = 0, 0 & 0 = 1):

 1 0 0 0
-0 1 1 1
=========
 0 0 0 0
Поскольку число превращается в точный 0 (или ложь, когда вычисляется как логическое значение) с использованием флага ! вернет правильный ответ

Если бы вы делали это с числом вроде 7, это выглядело бы так:

 0 1 1 1
-0 1 1 0
=========
 1 1 1 0
Возвращая число больше нуля, заставляя флаг ! вступить во владение и дать правильный ответ.
 */