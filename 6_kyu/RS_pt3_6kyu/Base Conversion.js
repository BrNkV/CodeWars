/**
 * In this kata you have to implement a base converter, 
 * which converts positive integers between arbitrary 
 * bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), 
the source alphabet (string) and the target alphabet (string). 
You can assume that the input value always consists of characters from the source alphabet. 
You don't need to validate it.
/================================================================================================================================
Examples
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
 */


function convert(input, source, target) {

}

let Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};


console.log(convert("15", dec, bin));//, '1111', '"15" dec -> bin');
console.log(convert("15", dec, oct));//, '17', '"15" dec -> oct');
console.log(convert("1010", bin, dec));//, '10', '"1010" bin -> dec');
console.log(convert("1010", bin, hex));//, 'a', '"1010" bin -> hex');
console.log(convert("0", dec, alpha));//, 'a', '"0" dec -> alpha');
console.log(convert("27", dec, allow));//, 'bb', '"27" dec -> alpha_lower');
console.log(convert("hello", allow, hex));//, '320048', '"hello" alpha_lower -> hex')
console.log(convert("SAME", alup, alup));//, 'SAME', '"SAME" alpha_upper -> alpha_upper');

// не мое решение... своего пока нет, в процессе....
function convert(input, source, target) {
  let s = 0; let str = '';
  for (let i = 0; i < input.length; i++) {
    s = s * source.length + source.indexOf(input[i]);
  }
  while (s > 0) {
    str = target[s % target.length] + str;
    s = Math.floor(s / target.length);
  }
  return str ? str : target[0];
}