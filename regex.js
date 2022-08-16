// true if the string contains a number
const test = "I am a hero 012i am@"; //false
const test2 = "I am a hero i am"; //true
const regEx = /[^a-z ]/gi;
// const result = test.match(regEx);
// const result = regEx.test(test); //returns true/false
const result2 = test.match(regEx); //returns array of matched items if global flag is set, otherwise returns one item

// if (result2) {
//   console.log("something");
// } else {
//   console.log("nothing");
// }
result2 ? console.log("something") : console.log("nothing");
