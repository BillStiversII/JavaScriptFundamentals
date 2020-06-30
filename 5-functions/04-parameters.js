


let greeting = function (name) {
    console.log(`Hello, ${name}!`);
}

greeting();

let printMyName = function (fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello{, my name is ${ fullName}.`);
}

printMyName('Adam', 'Jayne');



let calculateBalance = function (debits, credits) {
    // paramenter debits = [array of numbers]
    // parameter credits = [numbers]
    let total = 0;

    for (let debit of debits) {
        total -= debit;
    }
    for (let credit of credits){
        total += credit;
    }
    console.log(total);
}
let mydeb = [150.00, 34.00, 23.98]
let mycred = [1000.00, 50.00, 25.00]

calculateBalance(mydeb, mycred);




