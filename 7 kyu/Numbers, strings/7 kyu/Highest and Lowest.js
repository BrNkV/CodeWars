//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let nums = JSON.parse("[" + arr + "]");
    let sortNums = nums.sort((a, b) => a - b);
    return `${sortNums[sortNums.length - 1]} ${sortNums[0]}`
}


// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9")
// highAndLow("1 2 3");// "3 1");

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));