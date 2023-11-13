/**
 * Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees

Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
 */

let whatTimeIsIt = function (angle) {
    let minuteAll = Math.trunc(angle / 0.5)
    let hour = Math.trunc(minuteAll / 60);
    let minute = Math.round(minuteAll % 60);

    if (hour == 0) {
        hour = 12;
    } else if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minute == 0 || minute < 10) {
        minute = `0${minute}`;
    }

    return `${hour}:${minute}`;
}


console.log(whatTimeIsIt(0));//"12:00"
console.log(whatTimeIsIt(90));//"03:00"
console.log(whatTimeIsIt(180));//"06:00"
console.log(whatTimeIsIt(270));//"09:00"
console.log(whatTimeIsIt(360));//"12:00"
console.log(whatTimeIsIt(105));//"03:30"
console.log(whatTimeIsIt(351.0857058502796));//"11:42"


/**good
 * var whatTimeIsIt = function(angle) {
  let h = ~~(angle/30), m = ~~((angle%30)*2);
  return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
}


var whatTimeIsIt = function(angle) {
let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
if (hour < 10){hour = "0"+ hour;}
if (hour <= 0){hour = 12;}
if (minutes < 10){minutes = "0" + minutes;}
  return hour + ":" + minutes;
}



const whatTimeIsIt = (deg) =>
  [deg / 30 | 0 || 12, deg % 30 * 2 | 0]
    .map(x => ('0' + x).slice(-2)).join(':');
 */