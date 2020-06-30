/*

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 15,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    cavVote: false
}
/*
function createPerson (name,age, canVote) {
    let person = {
        name: name,
        age: age,
        canVote: canVote
    }

    return person;
}
*/


function person (name,age,canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

person1 = new person('Macy', 24, true);

console.log(person1.age);
