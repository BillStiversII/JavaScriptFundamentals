

let student = {
    name: 'Gloria',
    awesome: true,
    specailty: 'JavaScript',
    week: 1
};

console.log(student.name);
console.log(student['awesome']);

for ( x in student) {
    console.log([x]);
};

console.log(typeof student);

// for in loop will return to you the Keys of some collection