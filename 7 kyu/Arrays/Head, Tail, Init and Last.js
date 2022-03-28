/**
 * $ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
init ([1,2,3,4,5]) =>[1,2,3,4]
last [1,2,3,4,5] => 5
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// console.log("-----------------------------");

function head(arr) {
    let out;
    out = arr[0];
    return out;
}
// console.log(arr);
// console.log("-------------HEAD----------------");

function tail(arr) {
    let out = [...arr];
    out = out.splice(1);
    return out;
}
// console.log(arr);
// console.log("------------TAIL-----------------");

function init(arr) {
    let out = [...arr];
    return out.slice(0, -1);
}
// console.log(arr);
// console.log("-----------INIT------------------");

function last(arr) {
    let out;
    out = arr[arr.length - 1];
    return out;
}
// console.log(arr);
// console.log("------------LAST-----------------");




console.log(head(arr));
console.log(tail(arr));
console.log(init(arr));
console.log(last(arr));

/**
 * function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}
 */