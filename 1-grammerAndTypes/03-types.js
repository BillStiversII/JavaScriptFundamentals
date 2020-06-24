// Booleans
let isOn = true;

let isRaining = false;

//NULL
let empty = null;

// Undefined
let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; //15 9s
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; //16 9s
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numberAreHard = (0.2 * 10 + 0.1 + 10) / 10;
console.log(numberAreHard);

let created = Number('123'); // Turn 123 into the number
console.log(created);

let abc = Number('z');
console.log(abc);

// Strings
let stringOne = "doubleydoos";
let stringTwo = 'singleydoos';

let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050'+'100';
console.log(first, second, third, last);

let firstName = "Adam";
let lastName = "Jayne";

console.log(firstName + " " + lastName);

// escape characters
let myMessage = '\tdon\'t \ndo this\\';
console.log(myMessage);

// Objects

let frodo = {
    race: 'Hobbit',
    ring: 1,
    cloak: true,
    primaryWeapon:{
        name: 'Sting',
        attack: 30,
        damage: false
    }
};

console.log(typeof frodo);

// Array

let groceryList = ['banana','kiwi','coconut', 21,];

let aThing = [23, {ison: true}, ['wallaby']];

console.log(aThing instanceof Array);

// Strings: Methods

let userTitle = "                        a Day in tHE lIfe of dev                        ";
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'));


