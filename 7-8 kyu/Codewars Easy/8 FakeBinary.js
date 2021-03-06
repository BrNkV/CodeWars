/*complete
add

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string

Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру от 5 и выше на «1». Верните полученную строку. 
Примечание: ввод никогда не будет пустой строкой


*/

function fakeBin(x) {
    let out = [];
    x.split('').forEach((elem) => {
        if (elem < 5) return out.push(0);
        else if (elem >= 5) return out.push(1);
    })
    return out.join('');
}

console.log(fakeBin('45385593107843568'));// '01011110001100111');
console.log(fakeBin('509321967506747')); //'101000111101101'); 
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011');