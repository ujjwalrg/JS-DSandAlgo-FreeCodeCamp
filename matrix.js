// // // // // function zeroArray(m, n) {
// // // // //   // Creates a 2-D array with m rows and n columns of zeroes
// // // // //   let newArray = [];
// // // // //   let row = [];
// // // // //   for (let i = 0; i < m; i++) {
// // // // //     // Adds the m-th row into newArray
// // // // //     row.push(0);
// // // // //     for (let j = 0; j < n; j++) {
// // // // //       // Pushes n zeroes into the current row to create the columns
// // // // //       row.push(0);
// // // // //     }
// // // // //     // Pushes the current row, which now has n zeroes in it, to the array
// // // // //     newArray.push(row);
// // // // //   }
// // // // //   return newArray;
// // // // // }

// // // // // let matrix = zeroArray(3, 2);
// // // // // let arr = [1, 2, 3, 4, 5];
// // // // // // let result = arr.slice(-2);
// // // // // let result = arr.splice(-3, 2);
// // // // // console.log(result);
// // // // // console.log(arr);
// // // // function bark() {
// // // //   console.log("Woof!");
// // // // }
// // // // console.log(bark());

// // // // bark.animal = "dog";
// // // // console.log(bark);

// // // const array1 = ["a", "b", "c"];

// // // const iterator1 = array1.entries();
// // // // console.log(iterator1.next());
// // // for (let i = 0; i < 10; i++) {
// // //   console.log(iterator1.next().value);
// // //   // if (iterator1.next().value[0] != undefined) {
// // //   //   console.log(iterator1.next().value);
// // //   // } else {
// // //   //   break;
// // //   // }
// // //   // expected output: Array [0, "a"]
// // //   // console.log(iterator1.next().value);
// // //   // expected output: Array [1, "b"]
// // //   // console.log(iterator1.next().value);
// // // }

// // const words = [
// //   "spray",
// //   "limit",
// //   "elite",
// //   "exuberant",
// //   "destruction",
// //   "present",
// // ];

// // const result = words.filter((word) => word.length > 6);

// // console.log(result);
// // console.log(words);
// // // expected output: Array ["exuberant", "destruction", "present"]

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 139);
// if (found) {
//   console.log("found it");
// } else {
//   console.log("nope");
// }
let myNestedArray = [
  // Only change code below this line
  [
    "unshift",
    ["deep", ["deeper", ["deepest"]]],
    false,
    1,
    2,
    3,
    "complex",
    "nested",
  ],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array"],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
  // Only change code above this line
];
