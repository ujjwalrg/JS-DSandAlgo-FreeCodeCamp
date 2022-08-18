// // // let foods = {
// //   apples: 25,
// //   oranges: 32,
// //   plums: 28
// // };

// // // Only change code below this line

// // foods.bananas = 13;
// // foods["grapes"] = 35;
// // foods.strawberries = 27;
// // // Only change code above this line

// // console.log(foods);
// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(usersObj) {
//   // Only change code below this line
//   let count = 0;
//   for (let user in usersObj){
//     if (usersObj[user].online){
//       console.log(typeof user);
//       count = count + 1;
//     }
//   }
//   return count;

//   // Only change code above this line
// }

// console.log(countOnline(users));
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  let myArray = [];
  userObj.data.friends.push(friend);
  myArray = myArray.concat(userObj.data.friends);
  return myArray;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));
