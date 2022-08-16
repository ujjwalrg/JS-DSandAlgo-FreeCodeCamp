// true if the string contains a number
const test = "I am a hero i am"; //false
const test2 = "I am a hero 0i am"; //true
const regEx = /[^a-z ]/gi;
// const result = test.match(regEx);
const result = regEx.test(test);

console.log(result);
