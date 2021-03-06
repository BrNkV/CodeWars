/**complete
 * add
 * 
 * Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


Ваш коллега должен был написать простую вспомогательную функцию для заглавной буквы в строке (содержащей одно слово), прежде чем он уйдет в отпуск.

К сожалению, они ушли, и код, который они вам дали, не работает. Исправьте написанную ими вспомогательную функцию, чтобы она работала должным образом (т.е. сделайте первый символ в строке «словом» в верхнем регистре).

Не беспокойтесь о числах, специальных символах или нестроковых типах, передаваемых в функцию. Длина строки будет от 1 до 10 символов, но никогда не будет пустой.


 */

function capitalizeWord(word) {
  word = word.split('');
  let tmp = word[0].toString().toUpperCase();
  word[0] = tmp;
  return word.join('');
}

console.log(capitalizeWord('word'));// 'Word');
console.log(capitalizeWord('i'));// 'I');
console.log(capitalizeWord('glasswear'));// 'Glasswear');

//other variants
/**
 * const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());
 * 
 * 
 * 
 * function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);
 */