/**
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
  
    //your code here!
  
  }

  assert.strictEqual(updateLight("green"), "yellow");
  assert.strictEqual(updateLight("yellow"), "red");
  assert.strictEqual(updateLight("red"), "green");