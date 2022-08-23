// // // // // // // // // let foods = {
// // // // // // // //   apples: 25,
// // // // // // // //   oranges: 32,
// // // // // // // //   plums: 28
// // // // // // // // };

// // // // // // // // // Only change code below this line

// // // // // // // // foods.bananas = 13;
// // // // // // // // foods["grapes"] = 35;
// // // // // // // // foods.strawberries = 27;
// // // // // // // // // Only change code above this line

// // // // // // // // console.log(foods);
// // // // // // // const users = {
// // // // // // //   Alan: {
// // // // // // //     online: false
// // // // // // //   },
// // // // // // //   Jeff: {
// // // // // // //     online: true
// // // // // // //   },
// // // // // // //   Sarah: {
// // // // // // //     online: false
// // // // // // //   }
// // // // // // // }

// // // // // // // function countOnline(usersObj) {
// // // // // // //   // Only change code below this line
// // // // // // //   let count = 0;
// // // // // // //   for (let user in usersObj){
// // // // // // //     if (usersObj[user].online){
// // // // // // //       console.log(typeof user);
// // // // // // //       count = count + 1;
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return count;

// // // // // // //   // Only change code above this line
// // // // // // // }

// // // // // // // console.log(countOnline(users));
// // // // // // let user = {
// // // // // //   name: "Kenneth",
// // // // // //   age: 28,
// // // // // //   data: {
// // // // // //     username: "kennethCodesAllDay",
// // // // // //     joinDate: "March 26, 2016",
// // // // // //     organization: "freeCodeCamp",
// // // // // //     friends: ["Sam", "Kira", "Tomo"],
// // // // // //     location: {
// // // // // //       city: "San Francisco",
// // // // // //       state: "CA",
// // // // // //       country: "USA",
// // // // // //     },
// // // // // //   },
// // // // // // };

// // // // // // function addFriend(userObj, friend) {
// // // // // //   // Only change code below this line
// // // // // //   let myArray = [];
// // // // // //   userObj.data.friends.push(friend);
// // // // // //   myArray = myArray.concat(userObj.data.friends);
// // // // // //   return myArray;
// // // // // //   // Only change code above this line
// // // // // // }

// // // // // // console.log(addFriend(user, "Pete"));
// // // // // function convertCtoF(celsius) {
// // // // //   let fahrenheit;
// // // // //   fahrenheit = (celsius * 9/5) + 32;
// // // // //   return fahrenheit;
// // // // // }

// // // // // convertCtoF(30);

// // // // function reverseString(str) {
// // // //   str = str.split("").reverse().join('');
// // // //   return str;
// // // // }

// // // // console.log(reverseString("hello"));

// // // // function factorialize(num) {
// // // //   if (num === 0) return 1;
// // // //   if (num === 1) return 1;
// // // //   num = num * factorialize(num - 1);
// // // //   return num;
// // // // }

// // // // factorialize(5);
// // // // function findLongestWordLength(str) {
// // // //   let max = 0;
// // // //   const arr = str.split(" ");
// // // //   const size = arr.length;
// // // //   // console.log(size)
// // // //   for (let i = 0; i < size; i++) {
// // // //     max = Math.max(max, arr[i].length);
// // // //     // console.log(max)
// // // //   }
// // // //   return max;
// // // // }

// // // // findLongestWordLength("The quick brown fox jumped over the lazy dog");

// // // function largestOfFour(arr) {
// // //   let max = 0;
// // //   let arra = [];
// // //   for (let i = 0; i < 4; i++) {
// // //     for (let j = 0; j < 4; j++) {
// // //       max = Math.max(max, arr[i][j]);
// // //     }
// // //     arra.push(max);
// // //     max = -Infinity;
// // //   }
// // //   // console.log(arra)
// // //   return arra;
// // // }

// // // largestOfFour([
// // //   [4, 5, 1, 3],
// // //   [13, 27, 18, 26],
// // //   [32, 35, 37, 39],
// // //   [1000, 1001, 857, 1],
// // // ]);
// // // function confirmEnding(str, target) {
// // //   let size = str.length;
// // //   // console.log(str[size-1])
// // //   let size2 = target.length;
// // //   str = str.slice(size - size2);
// // //   console.log(str);
// // //   return str === target;
// // // }

// // // confirmEnding("Bastian", "n");

// // function repeatStringNumTimes(str, num) {
// //   let str1 = "";
// //   for (let i = 0; i < num; i++) {
// //     str1 = str1.concat(str);
// //   }
// //   return str1;
// // }

// // repeatStringNumTimes("abc", 3);
// function truncateString(str, num) {
//   let str2 = str.slice(0, num);
//   str2 = num < str.length ? str2.concat("...") : str2;
//   // str2 = str2.concat("...");
//   console.log(str2);
//   return str2;
// }

// // truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString(
//   "A-tisket a-tasket A green and yellow basket",
//   "A-tisket a-tasket A green and yellow basket".length
// );

// function findElement(arr, func) {
//   let num;
//   for (let i of arr) {
//     if (func(i)) return i;
//   }
//   return num;
// }

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// function booWho(bool) {
//   return bool == 0 ? true : bool === true ? true : false;
//   // return bool;
// }

// booWho(null);
// function frankenSplice(arr1, arr2, n) {
//   arr2 = arr2.slice(0, n).concat(arr1).concat(arr2.slice(n, arr2.length));
//   console.log(arr2);
//   return arr2;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// function bouncer(arr) {
//   // for (let item in arr){
//   //   if (!arr[item]) arr.splice(item, 1);
//   //   if (arr[item] === false)arr.splice(item, 1);
//   // }
//   arr = arr.filter(Boolean);
//   console.log(arr);
//   return arr;
// }

// // bouncer([7, "ate", "", false, 9]);
// bouncer([false, null, 0, NaN, undefined, "", { a: 2 }]);
// function getIndexToIns(arr, num) {
//   arr = arr.sort((a, b) => a - b);
//   // console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       arr.splice(i, 0, num);
//       console.log(arr);
//       return i;
//     }
//   }
//   arr.push(num);
//   return arr.length - 1;
//   // console.log(arr)
//   // return num;
// }

// // getIndexToIns([40, 60], 50);
// // getIndexToIns([3, 10, 5], 3)
// getIndexToIns([10, 20, 30, 40, 50], 30);
// function mutation(arr) {
//   let arr2 = arr.map((item) => item.toLowerCase().split("").sort().join(""));
//   // return (arr2[0].includes(arr2[1])) || arr2[1].includes(arr2[0]);
//   // console.log(arr2[0].includes(arr2[1]))
//   // console.log(arr2);
//   for (let i = 0; i < arr2[1].length; i++) {
//     // if (arr2[1])
//     if (arr2[0].indexOf(arr2[1][i]) === -1) return false;
//   }
//   return true;
//   // console.log(arr2[1].length)
// }

// // mutation(["hello", "hllo"]);
// mutation(["floor", "for"]);
// // mutation(["Mary", "Aarmy"])
function chunkArrayInGroups(arr, size) {
  let ar = [];
  let len = arr.length / size;

  for (let i = 0; i < len; i++) {
    let mar = [];
    for (let j = 0; j < size; j++) {
      //  console.log(mar.push[arr[0]]);
      if (arr[0] != undefined) mar.push(arr[0]);
      arr.shift();
    }
    ar.push(mar);
    mar = [];
  }
  console.log(ar);
  return ar;
}

// // chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
// let dog = {
//   name: "ujj",
//   numLegs: 3,
// };

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
  this.getm = function getme() {
    return this.color;
  };
}
// Only change code below this line

const hound = new Dog();
console.log(hound.getm);
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

dog.sayLegs();
