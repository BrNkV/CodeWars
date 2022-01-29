/**
 * Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
 */

/**
 * 
 * перебирала фором suspectInfo, в каждой итерации брала массив убитых и фильтровала suspectInfo[key], если массив убитых оставался пуст - key киллер
 */

function killer(suspectInfo, dead) {
    for (let key in suspectInfo) {
        if (suspectInfo[key].filter(item => dead.includes(item)).length > 0) {
            return key;
        };
    };
}

//"The killer is James!"
console.log(killer(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle']
    },
    ['Lucas', 'Bill']));//, 'James');

//"The killer is Megan!"
console.log(killer(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': []
    }, ['Ben']));//, 'Megan');


/**good
 * 
 * function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
    }


*
function killer(obj, dead) {
for (let i in obj) 
if (obj[i].filter(i => dead.includes(i)).length == dead.length) return i
}
*/