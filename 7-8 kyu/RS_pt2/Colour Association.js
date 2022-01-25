/**
 * Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
 */

function colourAssociation(array) {
    let out = [];
    array.forEach(element => {
        let obj = new Object();
        obj[element[0]] = element[1]
        out.push(obj)
    });

    return out;
}

let example = [["red", "energy"], ["yellow", "creativity"], ["brown", "friendly"], ["green", "growth"]];
console.log(colourAssociation(example));


//true answer.... i'm forgot this
const colourAssociation = array => array.map(([color, association]) => ({ [color]: association }));