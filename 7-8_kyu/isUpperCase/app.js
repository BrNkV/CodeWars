isUpperCase = function (a) {
  if (a === a.toUpperCase()) {
    return true;
  }
  else if (a == a.toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};
проверка на строчные 
 */

console.log(isUpperCase(''));
console.log(isUpperCase('c'));
console.log(isUpperCase('C'));
console.log(isUpperCase('hello I AM DONALD'));
console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'));

/*
  ''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
    Test.assertEquals('c'.isUpperCase(), false, 'c is not upper case');
    Test.assertEquals('C'.isUpperCase(), true, 'C is upper case');
    Test.assertEquals('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    Test.assertEquals('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    Test.assertEquals('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    Test.assertEquals('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(),
    */