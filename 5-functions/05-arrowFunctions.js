
// Fat Arrow function

let fatArrow = () => {
    console.log ('I reside in the NEW way of writing functions.');
}

fatArrow();

let conciseBody = () => console.log('I am concise');

conciseBody();

// concise body can only allows a single statement in the function body;

let blockBody = () => {
    let y = 0;
    y += 4;
    console.log(y);
}

blockBody();
