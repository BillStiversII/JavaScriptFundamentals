

function hi(){
    console.log('Ayo');
}

hi();
hi;
console.log(hi);
console.log(hi());

//create a function that, when invoked, lists out the number between 1-10;

let printNumbers = function(){
    for (let i=1; i <10; i++) {
        console.log(i);
    }
}

printNumbers();

console.log(printNumbers);

// IIFE
(function ()) { console.log('Why is this working')})();
