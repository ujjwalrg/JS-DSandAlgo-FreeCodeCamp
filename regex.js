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
// console.log(result);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w+]/g; // Change this line
let result3 = quoteSample.match(alphabetRegexV2);
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /[^\w+]/g; // Change this line
let result4 = quoteSample2.match(nonAlphabetRegex);
let movieName = "2001: A Space Odyssey";
let numRegex = /[\d+]/g; // Change this line
let result5 = movieName.match(numRegex);
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /[\s+]/g; // Change this line
let result6 = sample.match(countWhiteSpace);
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result7 = userCheck.test(username);
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line, matches between 3-6 h's
let result8 = ohRegex.test(ohStr);
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line, matches with more than 4 z's
let result9 = haRegex.test(haStr);
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line, matches exactly 4 m's
let result10 = timRegex.test(timStr);
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line, matches either favorite or favourite
let result11 = favRegex.test(favWord);
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Match passwords with more than 6 characters and has 2 consecutive digits
let result12 = pwRegex.test(sampleWord);
let myString = "Eleanor Roosevelt";
let myRegex2 = /(Eleanor|Franklin)(\w*|.)* Roosevelt/; // Change this line
let result13 = myRegex2.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result13);
