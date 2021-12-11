/**
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
    // Your solution here
  }

  it("Should work for under 3 days:", function() {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });
  
  it("Should work for under 7 days:", function() {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });
  
  it("Should work for 7 or more days:", function() {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);    
  });