/**complete
 * add
 * 
 * You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.

Вы пишете код для управления светофором в вашем городе. Вам нужна функция для обработки каждого изменения цвета с зеленого на желтый, красный, а затем снова на зеленый.

Завершите функцию, которая принимает строку в качестве аргумента, представляющего текущее состояние источника света, и возвращает строку, представляющую состояние, в которое должен перейти свет.

Например, update_light ('green') должен возвращать 'yellow'.


 */

function updateLight(current) {
  switch (current) {
    case "green": return 'yellow';
    case "yellow": return 'red';
    case "red": return 'green';
  }
}

console.log((updateLight("green")));//, "yellow");
console.log((updateLight("yellow")));//, "red");
console.log((updateLight("red")));//, "green");

//other variants
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current];