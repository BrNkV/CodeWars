let list1 = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'JavaScript'
    },
    {
        firstName: 'Maia',
        lastName: 'S.',
        country: 'Tahiti',
        continent: 'Oceania',
        age: 28,
        language: 'JavaScript'
    },
    {
        firstName: 'Shufen',
        lastName: 'L.',
        country: 'Taiwan',
        continent: 'Asia',
        age: 35,
        language: 'HTML'
    },
    {
        firstName: 'Sumayah',
        lastName: 'M.',
        country: 'Tajikistan',
        continent: 'Europe',
        age: 30,
        language: 'CSS'
    }
];

function countDevelopers(list) {
    let count = 0;

    /** 1 - variant
     * 
     * for (let i = 0; i < list.length; i++) {
        if (list[i].continent == "Europe" && list[i].language == "JavaScript") {
            count++;
        }
    }**/

    /** 2 - variant
     * 
     * list.forEach(e => {
        if (e.continent == "Europe" && e.language == "JavaScript") {
            count++;
        }
    });**/

    list.forEach(e => e.continent == "Europe" && e.language == "JavaScript" ? count++ : count);

    console.log(count);
    return count;
}
countDevelopers(list1)