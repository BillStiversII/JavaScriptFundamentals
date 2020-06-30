let myName = "Carson";
​
function someProcess() {
  let myName = "X-AESH-12";
  console.log(myName);
}
​
// let myName = "potato";
​
// console.log(myName);
​
// someProcess();
​
​
let y = 12;
​
function scopey() {
  y = 33;
  console.log(y);
}
​
console.log(y);
scopey();
console.log(y);
​
​
​
let slope = 12;
​
function varTest() {
  var slope = 56;
  if (true) {
    var slope = 9001;
    console.log(slope);
  }
  console.log(slope);
}
​
varTest();
console.log(slope);
​
// 9001, 12, 9001
// 9001, 9001, 12
// 56, 12, 56
// 12, 56, 9001
