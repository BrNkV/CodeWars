/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

function duplicateEncode(word) {
    let arr = word.split('');
    return arr.forEach(element => {
        return arr.filter(element => {
            return element.indexOf(element)
        })
    });
}

console.log(duplicateEncode("din"));//, "(((");
console.log(duplicateEncode("recede"));//, "()()()");
console.log(duplicateEncode("Success"));//, ")())())", "should ignore case");
console.log(duplicateEncode("(( @"));//, "))((");

/**good
 * 
 * 
 * var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


 * Элементы массива фильтруется на основе критериев поиска (query)

function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
  
  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']
  
 * 
 */