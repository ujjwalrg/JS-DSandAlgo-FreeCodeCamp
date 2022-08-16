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
// result2 ? console.log("something") : console.log("nothing");

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z]1>+?/; // Change this line, question mark is lazy loading matches the smallest pattern
let result = text.match(myRegex);
console.log(result);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w+]/g; // Change this line
let result3 = quoteSample.match(alphabetRegexV2);

console.log(result3);
