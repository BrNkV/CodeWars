const santa = {
    sayHoHoHo: function () { console.log('Ho Ho Ho!') },
    distributeGifts: function () { console.log('Gifts for all!'); },
    goDownTheChimney: function () { console.log('*whoosh*'); }
};

const notSanta = {
    sayHoHoHo: function () { console.log('Oink Oink!') }
};

console.log(isSantaClausable(santa));
console.log(isSantaClausable(notSanta));

function isSantaClausable(obj) {
    if (obj.sayHoHoHo && typeof obj.sayHoHoHo == 'function'
        && obj.distributeGifts && typeof obj.distributeGifts == 'function'
        && obj.goDownTheChimney && typeof obj.goDownTheChimney == 'function') return true;
    else return false;
}


/* best answer
1
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}

2
function isSantaClausable(obj) {
  return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}

*/