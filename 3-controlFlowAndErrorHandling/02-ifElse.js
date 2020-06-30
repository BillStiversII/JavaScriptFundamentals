

let temperature = 75;

if(temperature < 65) {
    console.log('Wear a Jacket');
} else {
    console.log('No jacket necessary!');
}


let myName = 'Bob Smith';

if (myName === 'Bill Stivers') {
    console.log('Hello my name is ' + myName );
} else {
    console.log ('Hello what is your name? '+ myName );
    
}

// ifElse

let age = 23;

// older than 25, say "yay! You can rent a car!"
// Older than 21, but not 25 , say " you can purchase alcohol"
// Older than 18, but not 21, say " Hey you can vote!"
// Younger than 18, say " you cando stuff one day"

if (age >= 25 ) {
    console.log ('Yay! You can rent a car!');
} else if (age >= 21) {
    console.log ('Yay! you can purchase alcholol!');
} else if  (age >= 18) {
    console.log ('Yay! you can vote');
} else {
    console.log('Sorry \'bout it!');
}