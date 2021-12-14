/* Complete

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

Если указано число от 0 до 9, верните его словами.

Вход :: 1 
Выход :: «Один».

Если ваш язык поддерживает это, попробуйте использовать оператор switch.

switch (expression) {
  case value1:
    //Здесь выполняются инструкции, если результат выражения равен value1
    [break;]
  case value2:
    //Инструкции, соответствующие value2
    [break;]
  ...
  case valueN:
    //Инструкции, соответствующие значению valueN
    //statementsN
    [break;]
  default:
    //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    //statements_def
    [break;]
}

*/

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      break;
  }
}

console.log((switchItUp(1)));//,"One");
console.log((switchItUp(3)));//,"Three");
console.log((switchItUp(5)));//,"Five");