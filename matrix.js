// // let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Only change code below this line

// foods.bananas = 13;
// foods["grapes"] = 35;
// foods.strawberries = 27;
// // Only change code above this line

// console.log(foods);
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      console.log(typeof user);
      count = count + 1;
    }
  }
  return count;

  // Only change code above this line
}

console.log(countOnline(users));
