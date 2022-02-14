/*
fter yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Task:

Finish method:
getCard()
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
{ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

*/

function getCard() {
  function rand(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function column(min, max, count, prefix) {
    let out = [];
    for (let i = 0; i <= count; i++) {
      let tmp = `${prefix}${rand(min, max)}`;
      if (!out.includes(tmp)) out.push(tmp);
      else i--
    }
    return out;
  }

  let tmpArr = [
    ...column(1, 15, 4, 'B'),
    ...column(16, 30, 4, 'I'),
    ...column(31, 45, 3, 'N'),
    ...column(46, 60, 4, 'G'),
    ...column(61, 75, 4, 'O'),
  ];
  return tmpArr;
}

console.log(getCard());


/**good
 * function getCard()
{
  return [...'BINGO'].reduce((a, b, i) => {
    let s = new Set;
    while (s.size < 5) s.add(~~(Math.random() * 15 + 1 + i * 15))
    let nums = [...s]
    return a.concat([...Array(b == 'N' ? 4 : 5)].map(_ => b + nums.pop()))
  }, [])
}
 */