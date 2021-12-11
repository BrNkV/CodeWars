// NOT complete
/*
First, You will write a very basic compression algorithm

It gets a string:
string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters like so:
compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string, the function will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm, create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"
*/

console.log('=========COMPRESS======================');

let compress = (str) => {
    let string = str.split(""),
        counter = 1,
        out = [];

    string.reduce((accumulator, currentValue, currentIndex,
        array) => {
        if (currentValue === array[currentIndex + 1]) {
            counter++;
        } else {
            out.push([counter, currentValue]);
            counter = 1;
        }
    }, "");

    // console.log(out.flat().length);

    if (out.flat().length < str.length) return out;
    else return str;
}


// [[26:a] [1:b] [18:a]]
console.log(compress('aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa'));

//[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]
console.log(compress('aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'));

console.log(compress('abcde'));

console.log('=========DECOMPRESS======================');

let decompress = arr => {
    let tmp = [];

    for (let i = 0; i < arr.length; i++) {
        while (arr[i][0] > 0) {
            tmp.push(arr[i][1]);
            arr[i][0]--;
        }
    }
    if (typeof arr === 'string') return arr;
    else return tmp.join('');
}

console.log(decompress([[26, 'a'], [1, 'b'], [18, 'a']]));
console.log(decompress([[14, 'a'], [1, 'b'], [41, 'a'], [1, 'c']]));