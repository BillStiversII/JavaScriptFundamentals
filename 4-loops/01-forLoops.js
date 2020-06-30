
let i = 7;

// (1 ; 2 ; 3)
// pos1: variable declartation and/or initialization
// pos2: Condition to run the loop (needs to be true)
// pos3: Incrementation or change to allow the condition to fail

for (i=0; i < 10; i++) {
    console.log('nice');
    // increment i
    // verify conditional (hop up if true, leave loop if false)
}

for (i=0; i <= 20; i += 2) {
    console.log(i)
}

let name = "Patrick";
let pCharacter = name[name.length - 1];
console.log(pCharacter);

// challenge 
// use a for loop, create a name variable, console log each caracter individually
            ///  0123
let challenge = 'Bill'; // legnth = 4

for (let x=0; x < challenge.length; x++) {
    console.log(challenge[x]);
}

for (let c of challenge) {
    console.log(c);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
}

console.log(total);