/**complete 
 * add
 * 
 * After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

После тяжелой работы в офисе вы решаете отдохнуть в отпуске. Так что вы забронируете рейс для себя и своей девушки и постараетесь оставить весь беспорядок позади.

Вам понадобится арендованный автомобиль, чтобы вы могли путешествовать во время отпуска. Менеджер по аренде автомобилей делает вам несколько хороших предложений.

Ежедневная аренда машины стоит 40 долларов. Если вы арендуете машину на 7 или более дней, вы получите скидку 50 долларов. В качестве альтернативы, если вы арендуете машину на 3 или более дней, вы получите скидку в размере 20 долларов.

Напишите код, который выдаст общую сумму за разные дни (d).

 */

function rentalCarCost(d) {
  let rent = 40;

  if (d >= 3 && d < 7) return (rent * d) - 20;
  if (d >= 7) return (rent * d) - 50;
  else return (rent * d)
}


  console.log((rentalCarCost(1)));//, 40);
  console.log((rentalCarCost(2)));//, 80);
  console.log((rentalCarCost(3)));//, 100);
  console.log((rentalCarCost(4)));//, 140);
  console.log((rentalCarCost(5)));//, 180);
  console.log((rentalCarCost(6)));//, 220);
  console.log((rentalCarCost(7)));//, 230);
  console.log((rentalCarCost(8)));//, 270);
  console.log((rentalCarCost(9)));//, 310);
  console.log((rentalCarCost(10)));//), 350);

  //other variants
  const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));