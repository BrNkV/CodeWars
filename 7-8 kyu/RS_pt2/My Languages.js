/**
 * Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
 */

function myLanguages(results) {
    let out = [];
    let tmp = [];

    for (key in results) {
        if (results[key] >= 60) tmp.push(results[key]);
    }

    tmp.sort((a, b) => b - a);

    tmp.forEach(element => {
        out.push(getKeyByValue(results, element));
    });

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    return out;
}

myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });//, ["Ruby", "Python"]
myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 });//, ["Dutch", "Greek", "Hindi"]
myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 });//, []


/**
 * normal answer
 * 
 function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}
 */