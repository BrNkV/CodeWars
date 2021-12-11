/**
 * Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog and NASM) if it is possible and false (0 in Prolog and NASM) if not. The input values are always positive.


Вы сделаете это?

Вы были в походе с друзьями вдали от дома, но когда пришло время возвращаться, вы понимаете, что у вас заканчивается топливо, а ближайший насос находится в 50 милях от дома!

Вы знаете, что в среднем ваша машина проезжает около 25 миль на галлон.

Осталось 2 галлона. Учитывая эти факторы, напишите функцию, которая сообщит вам, можно ли добраться до помпы или нет.

Функция должна возвращать истину (1 в Прологе и NASM), если это возможно, и ложь (0 в Прологе и NASM), если нет. Входные значения всегда положительны.
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
};

assert.equal(zeroFuel(50, 25, 2), true);
assert.equal(zeroFuel(100, 50, 1), false)