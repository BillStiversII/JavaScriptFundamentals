/*

-write a for loop running between the number 0-100
-for multiples of 3, instead of the number, console.log "Fizz"
-for multiples of 5 console.log "Buzz";
-for numbers which are multiples of Both 3 and 5, console.log "FizzBuzz".
-for any other number, console.log the value.

*/

fizzBuzz();

function fizzBuzz() {
    for ( let i = 0; i <= 100; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log('FizzBuzz');
        }
        else if ( i % 3 === 0 ) {
            console.log('Fizz');
        }
        else if ( i % 5 === 0 ) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}