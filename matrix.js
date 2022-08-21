// // // // // // // // let foods = {
// // // // // // //   apples: 25,
// // // // // // //   oranges: 32,
// // // // // // //   plums: 28
// // // // // // // };

// // // // // // // // Only change code below this line

// // // // // // // foods.bananas = 13;
// // // // // // // foods["grapes"] = 35;
// // // // // // // foods.strawberries = 27;
// // // // // // // // Only change code above this line

// // // // // // // console.log(foods);
// // // // // // const users = {
// // // // // //   Alan: {
// // // // // //     online: false
// // // // // //   },
// // // // // //   Jeff: {
// // // // // //     online: true
// // // // // //   },
// // // // // //   Sarah: {
// // // // // //     online: false
// // // // // //   }
// // // // // // }

// // // // // // function countOnline(usersObj) {
// // // // // //   // Only change code below this line
// // // // // //   let count = 0;
// // // // // //   for (let user in usersObj){
// // // // // //     if (usersObj[user].online){
// // // // // //       console.log(typeof user);
// // // // // //       count = count + 1;
// // // // // //     }
// // // // // //   }
// // // // // //   return count;

// // // // // //   // Only change code above this line
// // // // // // }

// // // // // // console.log(countOnline(users));
// // // // // let user = {
// // // // //   name: "Kenneth",
// // // // //   age: 28,
// // // // //   data: {
// // // // //     username: "kennethCodesAllDay",
// // // // //     joinDate: "March 26, 2016",
// // // // //     organization: "freeCodeCamp",
// // // // //     friends: ["Sam", "Kira", "Tomo"],
// // // // //     location: {
// // // // //       city: "San Francisco",
// // // // //       state: "CA",
// // // // //       country: "USA",
// // // // //     },
// // // // //   },
// // // // // };

// // // // // function addFriend(userObj, friend) {
// // // // //   // Only change code below this line
// // // // //   let myArray = [];
// // // // //   userObj.data.friends.push(friend);
// // // // //   myArray = myArray.concat(userObj.data.friends);
// // // // //   return myArray;
// // // // //   // Only change code above this line
// // // // // }

// // // // // console.log(addFriend(user, "Pete"));
// // // // function convertCtoF(celsius) {
// // // //   let fahrenheit;
// // // //   fahrenheit = (celsius * 9/5) + 32;
// // // //   return fahrenheit;
// // // // }

// // // // convertCtoF(30);

// // // function reverseString(str) {
// // //   str = str.split("").reverse().join('');
// // //   return str;
// // // }

// // // console.log(reverseString("hello"));

// // // function factorialize(num) {
// // //   if (num === 0) return 1;
// // //   if (num === 1) return 1;
// // //   num = num * factorialize(num - 1);
// // //   return num;
// // // }

// // // factorialize(5);
// // // function findLongestWordLength(str) {
// // //   let max = 0;
// // //   const arr = str.split(" ");
// // //   const size = arr.length;
// // //   // console.log(size)
// // //   for (let i = 0; i < size; i++) {
// // //     max = Math.max(max, arr[i].length);
// // //     // console.log(max)
// // //   }
// // //   return max;
// // // }

// // // findLongestWordLength("The quick brown fox jumped over the lazy dog");

// // function largestOfFour(arr) {
// //   let max = 0;
// //   let arra = [];
// //   for (let i = 0; i < 4; i++) {
// //     for (let j = 0; j < 4; j++) {
// //       max = Math.max(max, arr[i][j]);
// //     }
// //     arra.push(max);
// //     max = -Infinity;
// //   }
// //   // console.log(arra)
// //   return arra;
// // }

// // largestOfFour([
// //   [4, 5, 1, 3],
// //   [13, 27, 18, 26],
// //   [32, 35, 37, 39],
// //   [1000, 1001, 857, 1],
// // ]);
// // function confirmEnding(str, target) {
// //   let size = str.length;
// //   // console.log(str[size-1])
// //   let size2 = target.length;
// //   str = str.slice(size - size2);
// //   console.log(str);
// //   return str === target;
// // }

// // confirmEnding("Bastian", "n");

// function repeatStringNumTimes(str, num) {
//   let str1 = "";
//   for (let i = 0; i < num; i++) {
//     str1 = str1.concat(str);
//   }
//   return str1;
// }

// repeatStringNumTimes("abc", 3);
function truncateString(str, num) {
  let str2 = str.slice(0, num);
  str2 = num < str.length ? str2.concat("...") : str2;
  // str2 = str2.concat("...");
  console.log(str2);
  return str2;
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
