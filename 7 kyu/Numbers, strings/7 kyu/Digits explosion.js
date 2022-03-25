/**
 * Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
 * 
 * Examples
 * 
explode("312")
should return :
"333122"

explode("102269")
should return :
"12222666666999999999"
 */

function explode(s) {
    let arr = s.split('');
    let out = [];
    arr.forEach(element => {
        for (let i = 0; i < element; i++) {
            if (element > 0) out.push(element);
        }
    });
    return out.join('');
}

console.log(explode("312")); //"333122"
console.log(explode("102269")); //"12222666666999999999"


